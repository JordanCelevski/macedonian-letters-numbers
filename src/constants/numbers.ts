export const NUMBERS = [
  { value: "1", label: "еден" },
  { value: "2", label: "два" },
  { value: "3", label: "три" },
  { value: "4", label: "четири" },
  { value: "5", label: "пет" },
  { value: "6", label: "шест" },
  { value: "7", label: "седум" },
  { value: "8", label: "осум" },
  { value: "9", label: "девет" },
  { value: "10", label: "десет" },
] as const;

export type NumberValue = (typeof NUMBERS)[number]["value"];

export function isNumberValue(v: string): v is NumberValue {
  return NUMBERS.some((n) => n.value === v);
}
