export default Api => next => action => {
    console.log(action, `middleware call: ${new Date()}`);
    (!action["Call Service"] && next(action));
};