# RabbitMQ Tutorial

This is a step by step guide to install and run RabbitMQ on your local machine.

## Prerequisite
- Have docker installed
- Node should be avaiable
- IDE (VSCode) 

## Docker Setup

- Test docker using 
`docker run hello-world` should give some output

## RabbitMQ Setup

* Open a command prompt and type `docker run --name rabbitmq -p 5672:5672 rabbitmq` to download rabbitmq image and spin up docker container.
- Download `amqplib` pkg from node as `npm i amqplib`

## Running the Code

* Open two command prompts and navigate to the directory containing the `publisher.js` and `consumer.js` files.
* Run the publisher by typing `node publisher.js <message_for_queue>`.
* Run the consumer by typing `node consumer.js`.

* The consumer will print the queue output to the console.

## Reference

The code for this tutorial is based on the official RabbitMQ tutorial: https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html
