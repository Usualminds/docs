# Finpoints

## Web Network and Security
- Why is HTTPS more secure than HTTP？
> - HTTPS is based on SSL or TLS，which is encrypted secure communication，which cannot be obtained through the captain tool to obtain information，even if someone gets information，can not decrypt。
> - Use the CA digital signing certificate to prevent intermediary attacks。
> - HTTPS standard port 443，HTTP standard port 80。At the same time，it helps SEO and is more friendly to search engines。

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h1a7llociwj20u01b9777.jpg)

- What are the differences between RPC and HTTP？
> - PRC：Remote Produce Call。When using the RPC framework to implement inter-service calls，both the service provider and the service consumer must use a unified RPC framework，either dubbo or cxf，which can be used across operating systems in the same programming language，with the advantage of calling Fast，fast processing.at the same time,RPC calls are service-oriented encapsulation，optimized for service availability and efficiency。
> - HTTP：HyperText Transfer Protocol。When using http to make inter-service calls，there is no need to pay attention to the programming language used by the service provider，nor the programming language used by the service consumer。The service provider only needs to provide a restful-style interface，and the service consumer follows the restful principle。request service
A framework for remote invocation across systems and programming languages。Its advantage is that it is versatile

- Have you used any packet capture tools before？How to avoid information leakage when the packet is captured？
> - I have used wireshark，a packet capture tool，to view http and TCP packets。For HTTPS，only binary is displayed，rendered in ciphertext
> - Using HTTPS，the token，RC or DES algorithm used in the symmetric encryption communication process。

- Develop a Socket communication model (client and server) by using the programming language that you are
familiar with

> The model is shown in [link](https://note.youdao.com/s/5Arbme39)：https://note.youdao.com/s/5Arbme39


## Web Performance Optimization

- What tools will be used for the web frontend performance monitoring testing？
> - Chrome Lighthouse
> - Chrome Devtools
ususlly,we monitor the web for better performance,we can do sometihng like：
  - Reducing External HTTP Requests
  - Prefetching，like DNS
  - using GZip
  - images optimization
 
- What are the ways to optimise the transmission between web frontend and backend？
> - reduce the number of HTTP requests。Specifically，it is to reduce HTTP related to resource requests and merge static resource files
> - image lazy loading and web page lazy loading
> - Use packaging tools to merge and compress the CSS / JS files，like：webpack，vite
> - use caching such as：DNS caching、http caching (304)、localstorage、webwroks
> - avoid CSS expressions、minimize the level of selectors
> - gzip

## Coding

- How to implement the correspondence between multiple tabs within the browser？Please provide a demo。
  
    ```ts
    // 1. Local Storage Events
    window.onstorage = (e) => {

        // monitoring changes
        console.log('storage change')
    }

    // 2. SharedWorker: 
    // https://developer.mozilla.org/zh-CN/docs/Web/API/SharedWorker
    // https://mdn.github.io/simple-shared-worker/
    const myWorker = new SharedWorker("worker.js");

    myWorker.port.start();

    first.onchange = function() {
        myWorker.port.postMessage([first.value,second.value]);
        console.log('Message posted to worker');
    }

    second.onchange = function() {
        myWorker.port.postMessage([first.value,second.value]);
        console.log('Message posted to worker');
    }

    myWorker.port.onmessage = function(e) {
        result1.textContent = e.data;
        console.log('Message received from worker');
    }

    onconnect = function(e) {
        let port = e.ports[0];

        port.addEventListener('message', function(e) {
        let workerResult = 'Result: ' + (e.data[0] * e.data[1]);
        port.postMessage(workerResult);
        });

        port.start(); 
    }
    
    // 3. Websocket:
    // Socket.io: https://github.com/socketio/chat-example

    ```
- Implement an exchange sort algorithm by using any programming language that you are familiar with。
    ```ts  
    function exchange_sort(arrs: number[],isIncrease: boolean): number[] {
        const temp = arrs, len = temp.length

        for(let i=0;i<len-1;i++){
            for(let j=i;j<len;j++){
                if((isIncrease && temp[i] > temp[j]) || (!isIncrease && temp[i] < temp[j])){
                    let element = temp[i]
                    arrs[i] = arrs[j]
                    arrs[j] = element
                }
            }
        }

        return arrs
    }
    ```