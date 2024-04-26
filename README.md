# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Deploy
**Prerequisites**

1. Need a zabo-boards package in sparcs-kaist organization.
2. Need to login to sparcs-kaist using Github Token and Github CLI.

**Procedure**
1. Run `git clone https://github.com/sparcs-kaist/zabo-boards.git`
2. Run `docker compose -p zabo-boards -f .docker/docker-compose.yaml up`
3. After Step 2, watch-tower will automatically pull latest zabo-boards package and redeploy.
