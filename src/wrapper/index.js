export default function wrapper(code = "") {
  return `(function(){${code}}).apply(global)`;
}