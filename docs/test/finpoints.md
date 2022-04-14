# Finpoints Assessment

## Web Network and Security
- Why is HTTPS more secure than HTTP?
> - HTTPS is based on SSL or TLS, which is encrypted secure communication, which cannot be obtained through the captain tool to obtain information, even if someone gets information, can not decrypt.
> - Use the CA digital signing certificate to prevent intermediary attacks.
> - HTTPS standard port 443, HTTP standard port 80. At the same time, it helps SEO and is more friendly to search engines.

![](./https.png)

- What are the differences between RPC and HTTP?
> - PRC：Remote Produce Call. When using the RPC framework to implement inter-service calls, both the service provider and the service consumer must use a unified RPC framework, either dubbo or cxf, which can be used across operating systems in the same programming language, with the advantage of calling Fast, fast processing.at the same time,RPC calls are service-oriented encapsulation, optimized for service availability and efficiency.
> - HTTP: HyperText Transfer Protocol. When using http to make inter-service calls, there is no need to pay attention to the programming language used by the service provider, nor the programming language used by the service consumer. The service provider only needs to provide a restful-style interface, and the service consumer follows the restful principle. request service
A framework for remote invocation across systems and programming languages. Its advantage is that it is versatile

- Have you used any packet capture tools before? How to avoid information leakage when the packet is captured?
> - I have used wireshark, a packet capture tool, to view http and TCP packets. For HTTPS, only binary is displayed, rendered in ciphertext
> - Using HTTPS, the token, RC or DES algorithm used in the symmetric encryption communication process.

- Develop a Socket communication model (client and server) by using the programming language that you are
familiar with
> - 
## Web Performance Optimization

- What tools will be used for the web frontend performance monitoring testing?

- What are the ways to optimise the transmission between web frontend and backend?
  
## Coding

- How to implement the correspondence between multiple tabs within the browser? Please provide a demo. 
    ```ts
    ts
    ```
- Implement an exchange sort algorithm by using any programming language that you are familiar with.
    ```ts
    ts
    ```