import { SelectOption } from "../../../types/types";

export const difficultySelect: SelectOption[] = [
  { value: "", label: "all" },
  { value: "easy", label: "easy" },
  { value: "medium", label: "medium" },
  { value: "hard", label: "hard" },
];

export const occasionSelect: SelectOption[] = [
  { value: "", label: "all" },
  { value: "breakfast", label: "breakfast" },
  { value: "snack", label: "snack" },
  { value: "lunch", label: "lunch" },
  { value: "dinner", label: "dinner" },
  { value: "treat", label: "treat" },
];

export const costSelect: SelectOption[] = [
  { value: "", label: "all" },
  { value: "¢", label: "¢" },
  { value: "$", label: "$" },
  { value: "$$", label: "$$" },
  { value: "$$$", label: "$$$" },
  { value: "$$$$", label: "$$$$" },
];

export const maxTimeSelect: SelectOption[] = [
  { value: "", label: "all" },
  { value: "5", label: "< 5 mins" },
  { value: "10", label: "< 10 mins" },
  { value: "20", label: "< 20 mins" },
  { value: "30", label: "< 30 mins" },
  { value: "60", label: "< 60 mins" },
];
