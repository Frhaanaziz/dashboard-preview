import { SVGProps } from "react";

const Message = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.4"
        d="M22 15.94C22 18.73 19.76 20.99 16.97 21H16.96H7.05C4.27 21 2 18.75 2 15.96V15.95C2 15.95 2.006 11.524 2.014 9.298C2.015 8.88 2.495 8.646 2.822 8.906C5.198 10.791 9.447 14.228 9.5 14.273C10.21 14.842 11.11 15.163 12.03 15.163C12.95 15.163 13.85 14.842 14.56 14.262C14.613 14.227 18.767 10.893 21.179 8.977C21.507 8.716 21.989 8.95 21.99 9.367C22 11.576 22 15.94 22 15.94Z"
        fill="#8A92A6"
      />
      <path
        d="M21.4769 5.674C20.6109 4.042 18.9069 3 17.0309 3H7.05086C5.17486 3 3.47086 4.042 2.60486 5.674C2.41086 6.039 2.50286 6.494 2.82586 6.752L10.2509 12.691C10.7709 13.111 11.4009 13.32 12.0309 13.32C12.0349 13.32 12.0379 13.32 12.0409 13.32C12.0439 13.32 12.0479 13.32 12.0509 13.32C12.6809 13.32 13.3109 13.111 13.8309 12.691L21.2559 6.752C21.5789 6.494 21.6709 6.039 21.4769 5.674Z"
        fill="#8A92A6"
      />
    </svg>
  );
};

export default Message;
