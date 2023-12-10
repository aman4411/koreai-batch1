function createParagraph() {
  let paragraph = document.createElement("p"); //<p></p>
  let text = document.createTextNode("This is paragraph created using Js"); //simple text
  paragraph.appendChild(text); //<p>This is paragraph created using Js</p>
  let body = document.body;
  body.appendChild(paragraph);
}

function deleteParagraph(){
    let body = document.body;
    let lastParagraph = body.lastChild;
    lastParagraph.remove();
    // body.removeChild(lastParagraph);
}

function replaceParagraph(){
    let body = document.body;
    let lastParagraph = body.lastChild;
    let newParagraph = document.createElement('p');
    let text = document.createTextNode("This is new paragraph");
    newParagraph.appendChild(text);
    body.replaceChild(newParagraph, lastParagraph);
}
