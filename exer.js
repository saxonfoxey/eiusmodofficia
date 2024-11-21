function processStack(stack, channel) {
    if (someCondition) {
        // Some logic here
    } else if (stack && stack.fieldChannel === channel && stack.offset === 'normalize') {
        // Logic to handle the case when stack is defined, fieldChannel matches channel, and offset is 'normalize'
        console.log('Processing normalized stack');
    } else {
        // Other logic
    }
}
