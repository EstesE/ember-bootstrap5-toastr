import Controller from '@ember/controller';
import { action } from '@ember/object';
import toastr from 'toastr';

export default class IndexController extends Controller {
  @action
  test() {
    let toastrs = ['success', 'info', 'warning', 'error'];
    const rndInt = Math.floor(Math.random() * toastrs.length - 1) + 1
    toastr.options.timeOut = 3000; // How long the toast will display without user interaction
    toastr.options.extendedTimeOut = 3000; // How long the toast will display after a user hovers over it
    toastr[toastrs[rndInt]]('Have fun storming the castle!  😥', 'Miracle Max Says');
  }
}
