function customReact(element, container){
    
    const domElement = document.createElement(element.type)
    domElement.innerHTML=element.children
    // domElement.setAttribute("href", element.props.href)
    // domElement.setAttribute("target", element.props.target)
    
    for(const prop in element.props){
        if(prop === "childern"){continue}
        domElement.setAttribute(prop, element.props[prop])
    }

    return container.appendChild(domElement)
}

const reactElement= {
    type : "a",
    props: {
        href: "www.google.com",
        target: "_blank"
    },
    children: "Click here to open Google"
}

const mainContainer= document.querySelector("#root")

customReact(reactElement, mainContainer)