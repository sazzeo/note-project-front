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
};

export default utils;
