const inputPreview = document.querySelector(".wide .input");
const textareaElement = document.querySelector("textarea");


export function updatePreview() {
    if (inputPreview && textareaElement) {
        inputPreview.textContent = textareaElement.value;
    }

}