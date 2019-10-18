export function title(name?: string): string {
  const base = "Tatsuya Itakura";
  return name ? `${name} - ${base}` : base;
}
