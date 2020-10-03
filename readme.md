## Step1
### Create a new instance of Select3 class, and pass it querySelector of your own select element.

```js
const mySelect = new Select3("#my-select");
```

## Step2
### Add following css to your project:

```css
.select3_d-none {
    /* do not change */
    display: none;
}

.select3__container {
    /* change as you like */
    border: 1px solid #000;
    width: 40px;
    height: 30px;

    /* place for arrow */
    padding-right: 30px;

    /* better not to change */
    position: relative;
}

.select3__container * {
    margin: 0;
    padding: 0;
}

.select3__selected {
    /* better not to change */
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

    cursor: pointer;
}

.select3__arrow-container {
    /* arrow placement */
    position: absolute;
    right: 0;
    top: 0;

    /* arrow container size */
    width: 30px;
    height: 100%;

    /* centering arrow */
    display: flex;
    align-items: center;
    justify-content: center;
}

.select3__arrow {
    /* you can use your own symbol instead */
    border: solid black;
    height: 0;
    width: 0;
    border-width: 0 3px 3px 0;
    display: flex;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}

.select3__options-container {
    /* change as you like */
    background: #fff;

    /* better not to change */
    list-style: none;
    height: 100%;
    width: 100%;
    position: absolute;
}

.select3__option {
    /* change as you like */
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

    cursor: pointer;

    /* better not to change */
    list-style: none;
}

.select3__option:hover {
    /* change as you like */
    background: #15f;
}

.select3__option[disabled] {
    /* change as you like */
    color: #999;
}

.select3__option[selected] {
    /* change as you like */
    background-color: aqua;
}
```