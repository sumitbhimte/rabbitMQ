const amqp = require('amqplib');


const msg = {num: process.argv[2]};
connect();
/**
 * Connect to RabbitMQ and send a message to the 'jobs' queue.
 * This function is an example of a producer and it will print the
 * sent message to the console.
 * To exit the program, press CTRL+C.
 */
async function connect() {
    try {
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel();
        const result = await channel.assertQueue('jobs');
        channel.sendToQueue('jobs', Buffer.from(JSON.stringify(msg.num)));
        console.log(`[x] Sent successfully ${msg.num}`);
        channel.close();
        console.log(`[x] conn closed`);

    } catch (error) {
        console.log(error);
        
    }


}
