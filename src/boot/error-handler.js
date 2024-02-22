import { boot } from 'quasar/wrappers';
import { Notify } from 'quasar';
import { getErrorMessage } from 'src/utils/firebase/error-message';

//boot를 사용하거나 app.vue에있는 onErrorCatured 사용

//error 전역관리
export default boot(async ({ app }) => {
  app.config.errorHandler = (err, instance, info) => {
    console.log('### app.config.errHandler ##');
    console.log('err : ', err);
    console.log('instance : ', instance);
    console.log('info : ', info);

    Notify.create(getErrorMessage(err.code));
  };
});
