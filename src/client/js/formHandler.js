export function handleSubmit(event) {
    event.preventDefault();

    // Getting input value
    let formText = document.getElementById('name').value;
    if(formText.match(/^(?:(\d*)(?:\.(\d*))?|\s*)$/)) {
        alert('Please type something!!!');
        return
    }
    formText = {
        'article': formText
    }

    const results = document.getElementById('results');

    // Making get request with sending data and get results from the Endpoint
    return fetch('http://localhost:8081/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formText)
    })
    .then(res => res.json())
    .then(function(res) {
        if (res.errorMessage) {
            const errorElement = document.createElement('div');
            errorElement.className = "element hidden error";
            errorElement.textContent = res.errorMessage;
            results.appendChild(errorElement);

            setTimeout(() => {
                errorElement.className = "element error";   
            }, 100)
        } else {
            results.innerHTML = '';
            const keys = Object.keys(res);
            keys.forEach((key, index) => {

                const element = document.createElement('div');
                element.className = "element hidden";

                const strong = document.createElement('strong');
                strong.textContent = key.replace('_', ' ');
                const span = document.createElement('span');
                span.textContent = res[key];

                element.appendChild(strong);
                element.appendChild(span);
                
                results.appendChild(element);

                setTimeout(() => {
                    element.className = 'element';
                }, index + '000')
            });

            return res;
        }
    })
    .catch(e => {
        console.log(e);
        
    })
}