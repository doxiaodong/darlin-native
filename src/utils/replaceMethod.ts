
export default function replaceMethod(replacer) {
  return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
    descriptor.value = replacer(descriptor.value)
    return descriptor
  }
}
