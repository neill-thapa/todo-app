export function createInput(labelText, id) {
  const label = document.createElement("label");
  label.textContent = labelText;

  const input = document.createElement("input");
  input.id = id;

  label.htmlFor = id;

  return { label, input };
}

export function createModal() {
  const modal = document.createElement("dialog");
  const form = document.createElement("form");

  modal.appendChild(form);
  document.body.appendChild(modal);
  modal.showModal();

  return { modal, form };
}

export function appendField(form, field) {
  form.appendChild(field.label);
  form.appendChild(field.input);
}
