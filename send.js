class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
    }
    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.Error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    async sendForm() {
        try {
            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",

                },
                body: "",
            });
            this.displaySuccess();
        } catch {
            (error)
            this.displayError(error);

        }
    }

    init() {
        if (this.form) this.formButton.addEventListener("click", () => this.displaySuccess());
        return this;
    }

}
const FormSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='sucess'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Mensagem não enviada!</h1>",

});
FormSubmit.init();