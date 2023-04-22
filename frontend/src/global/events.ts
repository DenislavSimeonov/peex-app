interface CustomEvent extends Event {
  detail?: any;
}

type TypeCb = (e: CustomEvent) => void;

export const subscribe = (eventName: string, cb: TypeCb) => {
  document.addEventListener(eventName, cb);
};

export const unsubscribe = (eventName: string, cb: TypeCb) => {
  document.removeEventListener(eventName, cb);
};

export const publish = (eventName: string, data?: any) => {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
};
