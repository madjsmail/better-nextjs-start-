export default function objectToFormData(
  obj: any,
  formData: FormData = new FormData(),
  parentKey?: string
): FormData {
  const excludedKeys = ["id", "createdAt", "updatedAt"];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (excludedKeys.includes(key)) {
        continue;
      }

      const value = obj[key];

      const currentKey = parentKey ? `${parentKey}[${key}]` : key;

      if (value === null || typeof value === "undefined") {
        continue;
      } else if (value instanceof File || value instanceof Blob) {
        formData.append(currentKey, value);
      } else if (value instanceof Date) {
        formData.append(currentKey, value.toISOString());
      } else if (Array.isArray(value)) {
        value.forEach((item: any, index: number) => {
          objectToFormData(item, formData, `${currentKey}[${index}]`);
        });
      } else if (typeof value === "object") {
        objectToFormData(value, formData, currentKey);
      } else {
        formData.append(currentKey, String(value));
      }
    }
  }
  return formData;
}
