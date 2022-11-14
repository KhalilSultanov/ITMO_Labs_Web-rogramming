const table = document.createElement("table");
let lineNumber = 0;

function TableAdd() {
    if (document.getElementById('table') != null) alert("You have already created a table.");
    else
        table.innerHTML = "<table>\n" +
            "<tr>\n" +
            "      <th>\n" +
            lineNumber+
            "      </td>\n" +
            "     </td>\n" +
            "      <td>\n" +
            "      </td>\n" +
            "</tr>"
        "              </table>";

        table.setAttribute('id','table')
        document.body.append(table);
        lineNumber++;
}

function LineAdd(){
    let tab = table.insertRow();
    tab.insertCell().append(lineNumber);
    tab.insertCell().append("Content");
    lineNumber++;
}
function LineDelete(){
    if (document.getElementById('num').value==="") {
        alert("You didn't enter a number.");
        return null;
    }
    num = document.getElementById('num').value;
    try {
        table.deleteRow(num);
    }
    catch (DOMexcepion){
        alert("There is no line with the value " + num + ".");
    }

}