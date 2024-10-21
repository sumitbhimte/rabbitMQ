const amqp = require('amqplib');

connect();
/**
 * Connect to RabbitMQ and wait for messages on the 'jobs' queue.
 * This function is an example of a consumer and it will print the
 * received messages to the console.
 * To exit the program, press CTRL+C.
 */
async function connect() {
    try {
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();
        const result = await channel.assertQueue('jobs');

        channel.consume('jobs', msg => {
            const input = JSON.parse(msg.content.toString());
            console.log(`[x] received ${input}`);

            channel.ack(msg); 
        });
        console.log(`[x] waiting for messages. to exit press CTRL+C`);
    } catch (error) {
        console.log(error);
    }
}
