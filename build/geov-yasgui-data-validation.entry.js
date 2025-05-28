import { r as registerInstance, l as createEvent, i as h, m as Host } from './index-c3fe8f75.js';

const geovYasguiDataValidationCss = "div,p{color:var(--ion-color-danger)}";

const GeovYasguiDataValidation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.validationCompleted = createEvent(this, "validationCompleted", 7);
    this.requiredMismatch = new Set();
    this.datatypeMismatch = new Set();
    this.dataIsNotValid = {};
    this.data = undefined;
    this.expectedKeys = undefined;
  }
  componentWillLoad() {
    this.validateData();
  }
  validateData() {
    this.requiredMismatch.clear();
    this.datatypeMismatch.clear();
    this.dataIsNotValid = {};
    this.expectedKeys.forEach(expectedKey => {
      // we iterate over rows
      this.data.forEach(row => {
        var _a;
        // check if required key is available in this row
        if (expectedKey.required && row[expectedKey.name] === undefined) {
          this.requiredMismatch.add(expectedKey.name);
        }
        // iterate over cells in row
        for (const bindingKey in row) {
          if (Object.prototype.hasOwnProperty.call(row, bindingKey)) {
            // get the cell
            const cell = row[bindingKey];
            // if there is a validation defined for this binding key...
            if (expectedKey.name === bindingKey) {
              // ...check datatype
              if (expectedKey.datatype && ((_a = cell === null || cell === void 0 ? void 0 : cell.datatype) !== null && _a !== void 0 ? _a : 'string') !== expectedKey.datatype) {
                this.datatypeMismatch.add(expectedKey.name);
              }
              // ...check custom validator
              if ((expectedKey === null || expectedKey === void 0 ? void 0 : expectedKey.customValidator) && typeof expectedKey.customValidator === 'function') {
                const customValidationError = expectedKey.customValidator(cell);
                if (customValidationError)
                  this.dataIsNotValid[expectedKey.name] = customValidationError;
              }
            }
          }
        }
      });
    });
    // Emit the validationCompleted event with the validation results
    const isValid = this.requiredMismatch.size === 0 && this.datatypeMismatch.size === 0 && Object.keys(this.dataIsNotValid).length === 0;
    this.validationCompleted.emit(isValid);
  }
  render() {
    return (h(Host, null, Array.from(this.requiredMismatch).map(key => (h("p", null, "The variable ?", key, " must not return empty values. Currently it is either not bound or it returns empty records."))), Array.from(this.datatypeMismatch).map(key => {
      var _a;
      return (h("p", null, "The variable ?", key, " must be of datatype ", (_a = this.expectedKeys.find(e => e.name === key)) === null || _a === void 0 ? void 0 :
        _a.datatype, ". Some or all records do not match that data type."));
    }), Object.keys(this.dataIsNotValid).map(key => (h("div", null, "Validation errors for variable ?", key, ":", h("ul", null, Array.from(this.dataIsNotValid[key]).map(message => (h("li", null, message)))))))));
  }
};
GeovYasguiDataValidation.style = geovYasguiDataValidationCss;

export { GeovYasguiDataValidation as geov_yasgui_data_validation };

//# sourceMappingURL=geov-yasgui-data-validation.entry.js.map