class Select3 
{

    constructor(element = '') {
        try {
            var e = document.querySelector(element);
        } catch (err) {
            throw new Error('Select3: Invalid query selector or empty argument');
        }

        if (e !== null && e.nodeName.toUpperCase() == "SELECT") {
            Select3.numberOfMe++;
            this.id = `Select3_${Select3.numberOfMe}`;
            this.realContainer = e;
        } else {
            throw new Error('Element is not \<select\>');
        }

        //binds
        this.selectClickHandler = this.selectClickHandler.bind(this);
        this.optionClickHandler = this.optionClickHandler.bind(this);
        this.displaySelected = this.displaySelected.bind(this);
        //binds end

        this.hideReal();
        this.createFake();
        this.displaySelected();
        this.selectedContainer.addEventListener("click", this.selectClickHandler);
        Array.from(this.optionsContainer.children).forEach(e => {
            if (!e.hasAttribute("disabled")){
                e.addEventListener("click", this.optionClickHandler);
            }
        })
    }

    hideReal() {
        this.realContainer.style.display = "none";
    }

    createFake() {
        // While the element will be replaced in the document, the variable whose outerHTML property was set will still hold a reference to the original element
        this.realContainer.outerHTML += `<div class=\"select3__container\" id=\"${this.id}\"><div class=\"select3__selected\"></div><ul class=\"select3__options-container\"></ul></div>`;
        this.realContainer = document.getElementById(`${this.id}`).previousElementSibling; // переопределяю настоящий селект
        this.container = document.querySelector(`#${this.id}`);
        this.selectedContainer = this.container.children[0];
        this.optionsContainer = this.container.children[1];
        this.options = []
        this.realContainer.childNodes.forEach(e => {
            if (e.nodeName != 'OPTION') {
                
            } else {
                let obj = {};
                obj.classes = Array.from(e.classList);
                obj.value = e.value;
                obj.isSelected = (e.attributes.selected)?true:false;
                obj.isDisabled = (e.attributes.disabled)?true:false;
                obj.text = e.innerHTML;
                this.options.push(obj);
            }
        })

        this.options.forEach(e => {
            let item = document.createElement("li");
            item.innerHTML = e.text;
            let classes = e.classes;
            classes.push("select3__option");
            if (e.isDisabled) {
                item.setAttribute("disabled", "disabled");
                classes.push("select3__option_disabled");
            }
            if (e.isSelected) {
                item.setAttribute("selected", "selected");
            }
            item.classList = e.classes.join(' ');
            item.setAttribute('value', e.value);
            this.optionsContainer.appendChild(item);
            this.optionsContainer.classList.toggle("select3_d-none");
        });
    }

    displaySelected() {
        let selected;
        if (selected = this.optionsContainer.querySelector("li[selected]")) {
            this.selectedContainer.innerHTML = selected.innerHTML + '<div class="select3__arrow-container"><i class=\"select3__arrow\"></div>';
        }
        
    }

    clearSelected() {
        while (document.querySelector(`#${this.id} li[selected]`)) {
            document.querySelector(`#${this.id} li[selected]`).removeAttribute('selected');
        }
    }

    selectClickHandler() {
        this.optionsContainer.classList.toggle("select3_d-none");
    }

    optionClickHandler(e) {
        this.clearSelected();
        e.target.setAttribute('selected', 'selected');
        this.realContainer.value = e.target.getAttribute('value');
        this.displaySelected();
        this.optionsContainer.classList.toggle("select3_d-none");
    }
}

Select3.numberOfMe = 0; //static variable

export default Select3;