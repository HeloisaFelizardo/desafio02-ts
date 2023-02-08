
export const login = (): void => {

    let nameValue = (document.querySelector("#name") as HTMLInputElement).value;
    let emailValue = (document.querySelector("#email") as HTMLInputElement).value;
    let passwordValue = (document.querySelector("#password") as HTMLInputElement).value;

    let formValue = {
        name: nameValue,
        email: emailValue,
        password: passwordValue
    };

    let mensagem = 'Bem vinda ' + (formValue.name);

    alert(mensagem)
    console.log(formValue);
}
