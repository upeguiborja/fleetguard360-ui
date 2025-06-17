export default function clsx(...args: (string | boolean | null | undefined)[]) {
  return args.filter(Boolean).join(" ").trim();
}
