import {
  defineAsyncComponent
} from "./chunk-S3UI46G6.js";
import "./chunk-NIBQISYW.js";

// node_modules/vuemailsignatureconverter/index.ts
var mailSignatureConverter = (app) => {
  app.component(
    "mailSignatureConverter",
    defineAsyncComponent(() => import("/Users/sebastiantiede/Sites/apps/_playgrounds/html-2-mailsignature/node_modules/vuemailsignatureconverter/components/converter.vue"))
  );
  app.component(
    "mailSignatureEditable",
    defineAsyncComponent(() => import("/Users/sebastiantiede/Sites/apps/_playgrounds/html-2-mailsignature/node_modules/vuemailsignatureconverter/components/editable.vue"))
  );
  app.component(
    "mailClientWindow",
    defineAsyncComponent(() => import("/Users/sebastiantiede/Sites/apps/_playgrounds/html-2-mailsignature/node_modules/vuemailsignatureconverter/components/mailClientWindow.vue"))
  );
};
export {
  mailSignatureConverter
};
//# sourceMappingURL=vueMailSignatureConverter.js.map
