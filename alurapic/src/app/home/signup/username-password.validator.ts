import { ValidatorFn, FormGroup } from '@angular/forms';

export const userNamePassword: ValidatorFn = (formGroup: FormGroup) => {
    const userName = formGroup.get('userName').value;
    const password = formGroup.get('password').value;

    if (userName.trim() + password.trim()) {
        // tslint:disable-next-line:triple-equals
        return userName != password
            ? null
            : { userNamePassword: true };
    } else {
        return null;
    }
};
