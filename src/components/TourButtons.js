import Image from "next/image";
import Link from "next/link";
import React from "react";

const TourButtons = ({ buttonData }) => {
  const buttons = buttonData.attributes.buttons;
  const backgroundColor = buttonData.attributes.background_color;
  const textColor = buttonData.attributes.text_color;
  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <>
      {buttons.map((button) => {
        const { image, video, button_label_url } = button;
        return (
          <div className="flex w-full gap-2" key={button.id}>
            <Image loader={myLoader} src={image.data.attributes.url} width={100} height={100} className="object-cover rounded-lg" />
            <div className="w-full flex flex-col justify-center items-start gap-2">
              {button_label_url.map((btn) => (
                <Link
                  href={btn.button_url}
                  target="_blank"
                  className="p-2 w-full"
                  style={{ backgroundColor: backgroundColor, color: textColor }}
                  key={btn.id}
                >
                  {btn.button_label}
                </Link>
              ))}
              {video.data && (
                <Link
                  href={video.data.attributes.url}
                  target="_blank"
                  className="p-2 w-full"
                  style={{ backgroundColor: backgroundColor, color: textColor }}
                >
                  Ver Video
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TourButtons;
