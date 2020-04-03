import * as functions from "firebase-functions";
import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";
import { AppModule } from "./app.module";

// import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import express from "express";
import * as bodyParser from "body-parser";
// import * as cors from "cors";



const server = express();


/* Express middleware. */
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
// server.use(cors());
/* End of express middleware. */


const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance)
  );


  app.use(bodyParser.json());

/*    const options = new DocumentBuilder()
     .setTitle("Cats example")
     .setDescription("The cats API description")
     .setVersion("1.0")
     .addTag("cats")
     .build();
   const document = SwaggerModule.createDocument(app, options);
   SwaggerModule.setup("api", app, document); */
  return app.init();
};

createNestServer(server)
  .then((v) => console.log("Nest Ready"))
  .catch((err) => console.error("Nest broken", err));

export const api = functions.https.onRequest(server);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
