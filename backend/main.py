import requests
import csv
import re

# 🔐 CONFIG
API_URL = "https://your-api-endpoint.com/applicant"   # <-- replace
TOKEN = "Bearer 7dWp0gmgo1F2Qm95seGzxAwYxg04lW"                      # <-- replace

HEADERS = {
    "Authorization": f"Bearer 7dWp0gmgo1F2Qm95seGzxAwYxg04lW",
    "Content-Type": "application/json"
}

PAGE_SIZE = 100
page = 1

all_invalid_data = []

# ✅ Validation function
def is_valid_phone(phone):
    if not phone:
        return False

    phone = phone.strip()

    # +61 numbers always valid (as per your rule)
    if phone.startswith("+61"):
        return True

    # valid international format
    if re.match(r'^\+[1-9][0-9]{7,14}$', phone):
        return True

    # valid numeric format
    if re.match(r'^[0-9]{8,12}$', phone):
        return True

    return False


while True:
    print(f"Fetching page {page}...")

    payload = {
        "page": page,
        "page_size": PAGE_SIZE,"organisation_id": 49
    }

    response = requests.post(API_URL, json=payload, headers=HEADERS)

    if response.status_code != 200:
        print("API Error:", response.text)
        break

    data = response.json()

    results = data.get("results", [])

    if not results:
        break

    for item in results:
        phone = item.get("phone")
        pk = item.get("pk") or item.get("id")

        # adjust name fields based on your API
        name = item.get("full_name") or (
            (item.get("first_name", "") + " " + item.get("last_name", "")).strip()
        )

        if not is_valid_phone(phone):
            all_invalid_data.append({
                "pk": pk,
                "name": name,
                "phone": phone
            })

    page += 1


# 📁 EXPORT TO CSV
csv_file = "invalid_phone_numbers.csv"

with open(csv_file, mode="w", newline="", encoding="utf-8") as file:
    writer = csv.DictWriter(file, fieldnames=["pk", "name", "phone"])
    writer.writeheader()
    writer.writerows(all_invalid_data)

print(f"\n✅ Done! {len(all_invalid_data)} invalid records saved to {csv_file}")