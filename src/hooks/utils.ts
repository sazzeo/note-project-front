const utils = {
  getPath: (): string => {
    return $router.currentRoute.value.fullPath;
  },
  isPath: (path: string): boolean => {
    const fullPath = $router.currentRoute.value.fullPath;
    return fullPath === path;
  },
  goPath: (path: string) => {
    $router.push(path);
  },
  isPathStartWith: (path: string): boolean => {
    const fullPath = $router.currentRoute.value.fullPath;
    return fullPath.startsWith(path);
  },
  getParam: (id: string): string => {
    const res = $router.currentRoute.value.params[id];
    if (typeof res == "object") {
      alert("여기");
      return "";
    }
    return res;
  },
  goBack: () => {
    $router.go(-1);
  },
};

export default utils;
