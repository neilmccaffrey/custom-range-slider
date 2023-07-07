const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling
    label.innerHTML = value

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    /* get numerical width of range_width and label_width (substring - 2 gets rid of "px") */
    const num_width = +range_width.substring(0, range_width.length - 2)
    const label_num_width = +label_width.substring(0, label_width.length - 2)

    const max = +e.target.max
    const min = +e.target.min

    const left = value * (num_width / max) - (label_num_width / 2) + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`

})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }