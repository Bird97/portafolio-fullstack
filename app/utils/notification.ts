import { showToast } from "nextjs-toast-notify";

export function notification(tipe: string, message: string) {
  if (tipe == "success") {
    return showToast.success(message, {
      duration: 4000,
      progress: true,
      position: "bottom-center",
      transition: "bounceIn",
      icon: "",
      sound: true,
    });
  }

  if (tipe == "error") {
    return showToast.error(message, {
      duration: 4000,
      progress: true,
      position: "bottom-center",
      transition: "bounceIn",
      icon: "",
      sound: true,
    });
  }

  if (tipe == "warning") {
    return showToast.warning(message, {
      duration: 4000,
      progress: true,
      position: "bottom-center",
      transition: "bounceIn",
      icon: "",
      sound: true,
    });
  }

  if (tipe == "info") {
    return showToast.info(message, {
      duration: 4000,
      progress: true,
      position: "bottom-center",
      transition: "bounceIn",
      icon: "",
      sound: true,
    });
  }
}
