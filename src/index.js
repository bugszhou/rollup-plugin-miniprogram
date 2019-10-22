import wrapper from "./wrapper/index";

export default function varToThis() {
  return {
    name: 'miniprogram',
    generateBundle(options, bundle) {
      Object.keys(bundle).forEach(key => {
        console.log(options.file)
        if (options.file.indexOf("miniprogram") > -1) {
          bundle[key].code = bundle[key].code.replace(/require\((\'|\")util(\'|\")\)/, 'global.util');
          bundle[key].code = wrapper(bundle[key].code);
        }
      });
    }
  };
}