import { Cat } from "./models/Cat";

export const resolvers = {
    Query: {
        hello: () => "hello",
        cats: () => Cat.find()
    },
    Mutation: {
        createCat: async (_,{name}) => {
            const kitty = new Cat({ name });
             await kitty.save().then(() => console.log('meow'));
            return kitty;
        }
    }
}

