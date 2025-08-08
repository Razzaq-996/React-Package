function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);
    
    // Set inner content
    domElement.innerHTML = reactElement.children;

    // Set props as attributes (safely)
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Append to container
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
