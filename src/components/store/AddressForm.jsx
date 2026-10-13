import React, { useState } from "react";
import { INDIAN_STATES } from "../../assets/js/store/indianStates";

const LABELS = ["Home", "Work", "Other"];

const EMPTY = {
  label: "Home", name: "", mobile: "", address_line_1: "", address_line_2: "",
  landmark: "", city: "", state: "", pin_code: "", is_default: false,
};

const validate = (f) => {
  const e = {};
  if (f.name.trim().length < 2) e.name = "Enter the receiver's name";
  if (!/^[6-9]\d{9}$/.test(f.mobile.trim())) e.mobile = "Enter a valid 10 digit mobile number";
  if (f.address_line_1.trim().length < 3) e.address_line_1 = "Enter the address";
  if (f.city.trim().length < 2) e.city = "Enter the city";
  if (!f.state) e.state = "Select the state";
  if (!/^[1-9]\d{5}$/.test(f.pin_code.trim())) e.pin_code = "Enter a valid 6 digit PIN code";
  return e;
};

/**
 * Address form used on the Saved addresses page.
 * `onSubmit(address)` may return a promise; the form shows "Saving…" while it runs.
 */
const AddressForm = ({ initial, onSubmit, onCancel, submitLabel = "Save address", showDefault = true }) => {
  const [form, setForm] = useState({ ...EMPTY, ...(initial || {}) });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const set = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };
  const onChange = (e) => set(e.target.name, e.target.value);
  const onBlur = (e) => setErrors((er) => ({ ...er, [e.target.name]: validate(form)[e.target.name] }));

  const submit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length || saving) return;
    setSaving(true);
    try {
      await onSubmit({
        ...form,
        name: form.name.trim(), mobile: form.mobile.trim(), address_line_1: form.address_line_1.trim(),
        address_line_2: form.address_line_2.trim(), landmark: form.landmark.trim(), city: form.city.trim(),
        pin_code: form.pin_code.trim(),
      });
    } finally {
      setSaving(false);
    }
  };

  const field = (name, label, props = {}) => (
    <div className={props.full ? "full" : ""}>
      <label className="gz-form-label fw-bold mb-1" htmlFor={`addr_${name}`}>{label}</label>
      <input
        id={`addr_${name}`} name={name} value={form[name]} onChange={onChange} onBlur={onBlur}
        className={`gz-form-input ${errors[name] ? "invalid" : ""}`} {...props.input}
      />
      {errors[name] && <div className="gz-field-error">{errors[name]}</div>}
    </div>
  );

  return (
    <form onSubmit={submit} noValidate>
      <div className="gz-addr-labels" role="radiogroup" aria-label="Address type">
        {LABELS.map((l) => (
          <button type="button" key={l} role="radio" aria-checked={form.label === l} className={form.label === l ? "active" : ""} onClick={() => set("label", l)}>
            {l}
          </button>
        ))}
      </div>

      <div className="gz-form-grid">
        {field("name", "Receiver's name", { input: { autoComplete: "name" } })}
        {field("mobile", "Mobile number", { input: { inputMode: "numeric", maxLength: 10, autoComplete: "tel-national", placeholder: "10 digit number" } })}
        {field("address_line_1", "Address line 1", { full: true, input: { autoComplete: "address-line1", placeholder: "House / flat no., building, street" } })}
        {field("address_line_2", "Address line 2 (optional)", { full: true, input: { autoComplete: "address-line2", placeholder: "Area, colony" } })}
        {field("landmark", "Landmark (optional)", { full: true, input: { placeholder: "Near…" } })}
        {field("city", "City", { input: { autoComplete: "address-level2" } })}
        {field("pin_code", "PIN code", { input: { inputMode: "numeric", maxLength: 6, autoComplete: "postal-code", placeholder: "6 digit PIN" } })}
        <div className="full">
          <label className="gz-form-label fw-bold mb-1" htmlFor="addr_state">State</label>
          <select id="addr_state" name="state" value={form.state} onChange={onChange} onBlur={onBlur} className={`gz-form-input ${errors.state ? "invalid" : ""}`} autoComplete="address-level1">
            <option value="">Select state</option>
            {INDIAN_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.state && <div className="gz-field-error">{errors.state}</div>}
        </div>
      </div>

      {showDefault && (
        <label className="gz-check mt-3">
          <input type="checkbox" checked={form.is_default} onChange={(e) => set("is_default", e.target.checked)} />
          <span>Make this my default address</span>
        </label>
      )}

      <div className="gz-dialog-actions">
        {onCancel && <button type="button" className="gz-btn-ghost" onClick={onCancel} disabled={saving}>Cancel</button>}
        <button type="submit" className="gz-btn-cart" disabled={saving}>{saving ? "Saving…" : submitLabel}</button>
      </div>
    </form>
  );
};

export default AddressForm;
