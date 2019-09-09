function Router() {
    this.routes = [];
    this.rootRoute = '/';
}
Router.prototype.push = (path, params) => {}
Router.prototype.normalize = path => {
    return path.toString().replace(/\\/$/ig, '').replace(/^\\/ig, '');
}
Router.prototype.matchPath = () => {}
