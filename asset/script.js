const show_modal = document.getElementById("add_btn"),
    modal_body = document.getElementById("todo_form"),
    close_modal = document.querySelector(".close-modal"),
    input_modal = document.querySelector("#todo_input"),
    send_text = document.getElementById("todo_submit"),
    div_no_status = document.getElementById("no_status"),
    btn_close_modal = document.querySelectorAll(".close"),
    dives_status_box = document.querySelectorAll(".status");

function remove_modal(event) {
    event.target.parentElement.remove()
}

function open_modal_box() {
    modal_body.classList.add("active"), show_modal.style.backgroundColor = "green"
}

function close_modal_box() {
    modal_body.classList.remove("active"), show_modal.style.backgroundColor = "rgb(218, 11, 11)"
}
let i = 1;

function event_log(event) {
    let m_div_drag = event.target.id;
    event.dataTransfer.setData("getelem", m_div_drag)
}
show_modal.addEventListener("click", open_modal_box), close_modal.addEventListener("click", close_modal_box), send_text.addEventListener("click", (function () {
    if ("" === input_modal.value || 0 == input_modal.length) alert("please insert your task !!! ");
    else {
        div_no_status.style.overflow = "auto";
        let value_input = input_modal.value,
            m_div = document.createElement("div");
        m_div.classList.add("todo"), m_div.setAttribute("id", i), m_div.setAttribute("draggable", "true"), m_div.innerHTML = value_input, m_div.addEventListener("dragstart", event_log);
        let inner_spn_div = document.createElement("span");
        inner_spn_div.classList.add("close"), inner_spn_div.innerHTML = "&times", inner_spn_div.addEventListener("click", remove_modal), m_div.appendChild(inner_spn_div), div_no_status.appendChild(m_div), input_modal.value = "", close_modal_box(), i++
    }
})), input_modal.addEventListener("keyup", (function (event) {
    if (13 == event.keyCode)
        if ("" === input_modal.value || 0 == input_modal.length) alert("please insert your task !!! ");
        else {
            div_no_status.style.overflow = "auto";
            let value_input = input_modal.value,
                m_div = document.createElement("div");
            m_div.classList.add("todo"), m_div.setAttribute("id", i), m_div.setAttribute("draggable", "true"), m_div.innerHTML = value_input, m_div.addEventListener("dragstart", event_log);
            let inner_spn_div = document.createElement("span");
            inner_spn_div.classList.add("close"), inner_spn_div.innerHTML = "&times", inner_spn_div.addEventListener("click", remove_modal), m_div.appendChild(inner_spn_div), div_no_status.appendChild(m_div), input_modal.value = "", close_modal_box(), i++
        }
})), dives_status_box.forEach((function (item) {
    item.style.overflow = "auto", item.addEventListener("drop", (function (event) {
        let tran_drag_id = event.dataTransfer.getData("getelem"),
            elem_tran_drag_id = document.getElementById(tran_drag_id);
        item.append(elem_tran_drag_id)
    }))
})), dives_status_box.forEach((function (item) {
    item.addEventListener("dragover", (function (event) {
        event.preventDefault()
    }))
}));