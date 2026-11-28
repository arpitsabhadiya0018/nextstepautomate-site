(()=>{
'use strict';
const $=id=>document.getElementById(id);
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const ICONS={
  "ChatGPT":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PGcgc3Ryb2tlPSIjMTBBMzdGIiBzdHJva2Utd2lkdGg9IjQuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMzAgOCBDMTQgNCA2IDE5IDEzIDMwIEwyNSAzNyIvPjxwYXRoIGQ9Ik00NiAxMSBDNTggMTUgNTkgMzEgNDcgMzcgTDMzIDM0Ii8+PHBhdGggZD0iTTU2IDM0IEM1OSA0OCA0MyA2MCAzMSA1MiBMMjggMzkiLz48cGF0aCBkPSJNMzYgNTYgQzIzIDYzIDcgNTEgMTEgMzggTDIzIDI3Ii8+PHBhdGggZD0iTTggMzEgQzQgMTcgMTkgNCAzMiAxMiBMNDAgMjYiLz48cGF0aCBkPSJNNDYgNDggQzMzIDU4IDE4IDQ5IDIwIDM1IEwzMSAyNCIvPjwvZz48L3N2Zz4=",
  "Google Sheets":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTEzIDYgSDQwIEw1MiAxOCBWNTcgSDEzIFoiIGZpbGw9IiMzNEE4NTMiLz48cGF0aCBkPSJNNDAgNiBWMTggSDUyIiBmaWxsPSIjODFDOTk1Ii8+PHBhdGggZD0iTTIwIDI3IEg0NSBWNDggSDIwIFoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Ik0yMCAzNCBINDUgTTIwIDQxIEg0NSBNMzIgMjcgVjQ4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNSIvPjwvc3ZnPg==",
  "Gmail":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTcgNTEgVjE3IEwzMiAzNiBMNTcgMTcgVjUxIiBzdHJva2U9IiNFQTQzMzUiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik03IDUxIFYyMSIgc3Ryb2tlPSIjNDI4NUY0IiBzdHJva2Utd2lkdGg9IjgiLz48cGF0aCBkPSJNNTcgNTEgVjIxIiBzdHJva2U9IiMzNEE4NTMiIHN0cm9rZS13aWR0aD0iOCIvPjxwYXRoIGQ9Ik03IDE3IEwzMiAzNiIgc3Ryb2tlPSIjRUE0MzM1IiBzdHJva2Utd2lkdGg9IjkiLz48cGF0aCBkPSJNNTcgMTcgTDMyIDM2IiBzdHJva2U9IiNGQkJDMDQiIHN0cm9rZS13aWR0aD0iOSIvPjwvc3ZnPg==",
  "Slack":"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNEExNTRCIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTk0LjEyIDMxNS4xYzAgMjUuOS0yMS4xNiA0Ny4wNi00Ny4wNiA0Ny4wNlMwIDM0MSAwIDMxNS4xYzAtMjUuOSAyMS4xNi00Ny4wNiA0Ny4wNi00Ny4wNmg0Ny4wNnY0Ny4wNnptMjMuNzIgMGMwLTI1LjkgMjEuMTYtNDcuMDYgNDcuMDYtNDcuMDZzNDcuMDYgMjEuMTYgNDcuMDYgNDcuMDZ2MTE3Ljg0YzAgMjUuOS0yMS4xNiA0Ny4wNi00Ny4wNiA0Ny4wNnMtNDcuMDYtMjEuMTYtNDcuMDYtNDcuMDZWMzE1LjF6bTQ3LjA2LTE4OC45OGMtMjUuOSAwLTQ3LjA2LTIxLjE2LTQ3LjA2LTQ3LjA2UzEzOSAzMiAxNjQuOSAzMnM0Ny4wNiAyMS4xNiA0Ny4wNiA0Ny4wNnY0Ny4wNkgxNjQuOXptMCAyMy43MmMyNS45IDAgNDcuMDYgMjEuMTYgNDcuMDYgNDcuMDZzLTIxLjE2IDQ3LjA2LTQ3LjA2IDQ3LjA2SDQ3LjA2QzIxLjE2IDI0My45NiAwIDIyMi44IDAgMTk2LjlzMjEuMTYtNDcuMDYgNDcuMDYtNDcuMDZIMTY0Ljl6bTE4OC45OCA0Ny4wNmMwLTI1LjkgMjEuMTYtNDcuMDYgNDcuMDYtNDcuMDYgMjUuOSAwIDQ3LjA2IDIxLjE2IDQ3LjA2IDQ3LjA2cy0yMS4xNiA0Ny4wNi00Ny4wNiA0Ny4wNmgtNDcuMDZWMTk2Ljl6bS0yMy43MiAwYzAgMjUuOS0yMS4xNiA0Ny4wNi00Ny4wNiA0Ny4wNi0yNS45IDAtNDcuMDYtMjEuMTYtNDcuMDYtNDcuMDZWNzkuMDZjMC0yNS45IDIxLjE2LTQ3LjA2IDQ3LjA2LTQ3LjA2IDI1LjkgMCA0Ny4wNiAyMS4xNiA0Ny4wNiA0Ny4wNlYxOTYuOXpNMjgzLjEgMzg1Ljg4YzI1LjkgMCA0Ny4wNiAyMS4xNiA0Ny4wNiA0Ny4wNiAwIDI1LjktMjEuMTYgNDcuMDYtNDcuMDYgNDcuMDYtMjUuOSAwLTQ3LjA2LTIxLjE2LTQ3LjA2LTQ3LjA2di00Ny4wNmg0Ny4wNnptMC0yMy43MmMtMjUuOSAwLTQ3LjA2LTIxLjE2LTQ3LjA2LTQ3LjA2IDAtMjUuOSAyMS4xNi00Ny4wNiA0Ny4wNi00Ny4wNmgxMTcuODRjMjUuOSAwIDQ3LjA2IDIxLjE2IDQ3LjA2IDQ3LjA2IDAgMjUuOS0yMS4xNiA0Ny4wNi00Ny4wNiA0Ny4wNkgyODMuMXoiLz48L3N2Zz4=",
  "Airtable":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTYgMjAgTDMyIDcgTDU4IDIwIEwzMiAzMyBaIiBmaWxsPSIjRkZDNjJEIi8+PHBhdGggZD0iTTYgMjUgTDI4IDM2IFY1NyBMNiA0NSBaIiBmaWxsPSIjRkY1QjUzIi8+PHBhdGggZD0iTTU4IDI1IEwzNiAzNiBWNTcgTDU4IDQ1IFoiIGZpbGw9IiMxOEE3RTAiLz48L3N2Zz4=",
  "HubSpot":"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkY3QTU5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTI2Ny40IDIxMS42Yy0yNS4xIDIzLjctNDAuOCA1Ny4zLTQwLjggOTQuNiAwIDI5LjMgOS43IDU2LjMgMjYgNzhMMjAzLjEgNDM0Yy00LjQtMS42LTkuMS0yLjUtMTQtMi41LTEwLjggMC0yMC45IDQuMi0yOC41IDExLjgtNy42IDcuNi0xMS44IDE3LjgtMTEuOCAyOC42czQuMiAyMC45IDExLjggMjguNWM3LjYgNy42IDE3LjggMTEuNiAyOC41IDExLjYgMTAuOCAwIDIwLjktMy45IDI4LjYtMTEuNiA3LjYtNy42IDExLjgtMTcuOCAxMS44LTI4LjUgMC00LjItLjYtOC4yLTEuOS0xMi4xbDUwLTUwLjJjMjIgMTYuOSA0OS40IDI2LjkgNzkuMyAyNi45IDcxLjkgMCAxMzAtNTguMyAxMzAtMTMwLjIgMC02NS4yLTQ3LjctMTE5LjItMTEwLjItMTI4LjdWMTE2YzE3LjUtNy40IDI4LjItMjMuOCAyOC4yLTQyLjkgMC0yNi4xLTIwLjktNDcuOS00Ny00Ny45UzMxMS4yIDQ3IDMxMS4yIDczLjFjMCAxOS4xIDEwLjcgMzUuNSAyOC4yIDQyLjl2NjEuMmMtMTUuMiAyLjEtMjkuNiA2LjctNDIuNyAxMy42LTI3LjYtMjAuOS0xMTcuNS04NS43LTE2OC45LTEyNC44IDEuMi00LjQgMi05IDItMTMuOEMxMjkuOCAyMy40IDEwNi4zIDAgNzcuNCAwIDQ4LjYgMCAyNS4yIDIzLjQgMjUuMiA1Mi4yYzAgMjguOSAyMy40IDUyLjMgNTIuMiA1Mi4zIDkuOCAwIDE4LjktMi45IDI2LjgtNy42bDE2My4yIDExNC43em04OS41IDE2My42Yy0zOC4xIDAtNjktMzAuOS02OS02OXMzMC45LTY5IDY5LTY5IDY5IDMwLjkgNjkgNjktMzAuOSA2OS02OSA2OXoiLz48L3N2Zz4=",
  "Notion":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PHJlY3QgeD0iOCIgeT0iNyIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjUwIiByeD0iNSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMTExIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNMTggMTcgSDI4IEw0MyA0MSBWMTggSDQ4IFY0NyBIMzkgTDI0IDI0IFY0NyBIMTggWiIgZmlsbD0iIzExMSIvPjwvc3ZnPg==",
  "Telegram":"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMjZBNUU0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTI0OCw4QzExMS4wMzMsOCwwLDExOS4wMzMsMCwyNTZTMTExLjAzMyw1MDQsMjQ4LDUwNCw0OTYsMzkyLjk2Nyw0OTYsMjU2LDM4NC45NjcsOCwyNDgsOFpNMzYyLjk1MiwxNzYuNjZjLTMuNzMyLDM5LjIxNS0xOS44ODEsMTM0LjM3OC0yOC4xLDE3OC4zLTMuNDc2LDE4LjU4NC0xMC4zMjIsMjQuODE2LTE2Ljk0OCwyNS40MjUtMTQuNCwxLjMyNi0yNS4zMzgtOS41MTctMzkuMjg3LTE4LjY2MS0yMS44MjctMTQuMzA4LTM0LjE1OC0yMy4yMTUtNTUuMzQ2LTM3LjE3Ny0yNC40ODUtMTYuMTM1LTguNjEyLTI1LDUuMzQyLTM5LjUsMy42NTItMy43OTMsNjcuMTA3LTYxLjUxLDY4LjMzNS02Ni43NDYuMTUzLS42NTUuMy0zLjEtMS4xNTQtNC4zODRzLTMuNTktLjg0OS01LjEzNS0uNXEtMy4yODMuNzQ2LTEwNC42MDgsNjkuMTQyLTE0Ljg0NSwxMC4xOTQtMjYuODk0LDkuOTM0Yy04Ljg1NS0uMTkxLTI1Ljg4OC01LjAwNi0zOC41NTEtOS4xMjMtMTUuNTMxLTUuMDQ4LTI3Ljg3NS03LjcxNy0yNi44LTE2LjI5MXEuODQtNi43LDE4LjQ1LTEzLjcsMTA4LjQ0Ni00Ny4yNDgsMTQ0LjYyOC02Mi4zYzY4Ljg3Mi0yOC42NDcsODMuMTgzLTMzLjYyMyw5Mi41MTEtMzMuNzg5LDIuMDUyLS4wMzQsNi42MzkuNDc0LDkuNjEsMi44ODVhMTAuNDUyLDEwLjQ1MiwwLDAsMSwzLjUzLDYuNzE2QTQzLjc2NSw0My43NjUsMCwwLDEsMzYyLjk1MiwxNzYuNjZaIi8+PC9zdmc+",
  "WhatsApp":"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMjVEMzY2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTM4MC45IDk3LjFDMzM5IDU1LjEgMjgzLjIgMzIgMjIzLjkgMzJjLTEyMi40IDAtMjIyIDk5LjYtMjIyIDIyMiAwIDM5LjEgMTAuMiA3Ny4zIDI5LjYgMTExTDAgNDgwbDExNy43LTMwLjljMzIuNCAxNy43IDY4LjkgMjcgMTA2LjEgMjdoLjFjMTIyLjMgMCAyMjQuMS05OS42IDIyNC4xLTIyMiAwLTU5LjMtMjUuMi0xMTUtNjcuMS0xNTd6bS0xNTcgMzQxLjZjLTMzLjIgMC02NS43LTguOS05NC0yNS43bC02LjctNC02OS44IDE4LjNMNzIgMzU5LjJsLTQuNC03Yy0xOC41LTI5LjQtMjguMi02My4zLTI4LjItOTguMiAwLTEwMS43IDgyLjgtMTg0LjUgMTg0LjYtMTg0LjUgNDkuMyAwIDk1LjYgMTkuMiAxMzAuNCA1NC4xIDM0LjggMzQuOSA1Ni4yIDgxLjIgNTYuMSAxMzAuNSAwIDEwMS44LTg0LjkgMTg0LjYtMTg2LjYgMTg0LjZ6bTEwMS4yLTEzOC4yYy01LjUtMi44LTMyLjgtMTYuMi0zNy45LTE4LTUuMS0xLjktOC44LTIuOC0xMi41IDIuOC0zLjcgNS42LTE0LjMgMTgtMTcuNiAyMS44LTMuMiAzLjctNi41IDQuMi0xMiAxLjQtMzIuNi0xNi4zLTU0LTI5LjEtNzUuNS02Ni01LjctOS44IDUuNy05LjEgMTYuMy0zMC4zIDEuOC0zLjcuOS02LjktLjUtOS43LTEuNC0yLjgtMTIuNS0zMC4xLTE3LjEtNDEuMi00LjUtMTAuOC05LjEtOS4zLTEyLjUtOS41LTMuMi0uMi02LjktLjItMTAuNi0uMi0zLjcgMC05LjcgMS40LTE0LjggNi45LTUuMSA1LjYtMTkuNCAxOS0xOS40IDQ2LjMgMCAyNy4zIDE5LjkgNTMuNyAyMi42IDU3LjQgMi44IDMuNyAzOS4xIDU5LjcgOTQuOCA4My44IDM1LjIgMTUuMiA0OSAxNi41IDY2LjYgMTMuOSAxMC43LTEuNiAzMi44LTEzLjQgMzcuNC0yNi40IDQuNi0xMyA0LjYtMjQuMSAzLjItMjYuNC0xLjMtMi41LTUtMy45LTEwLjUtNi42eiIvPjwvc3ZnPg==",
  "Google Drive":"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNDI4NUY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTMzOSAzMTQuOUwxNzUuNCAzMmgxNjEuMmwxNjMuNiAyODIuOUgzMzl6bS0xMzcuNSAyMy42TDEyMC45IDQ4MGgzMTAuNUw1MTIgMzM4LjVIMjAxLjV6TTE1NC4xIDY3LjRMMCAzMzguNSA4MC42IDQ4MCAyMzcgMjA4LjggMTU0LjEgNjcuNHoiLz48L3N2Zz4=",
  "Claude":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PGcgc3Ryb2tlPSIjQzk3ODU1IiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTMyIDYgVjU4IE02IDMyIEg1OCBNMTMgMTMgTDUxIDUxIE01MSAxMyBMMTMgNTEiLz48L2c+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iNiIgZmlsbD0iI0M5Nzg1NSIvPjwvc3ZnPg==",
  "Gemini":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCIgeTE9IjEiIHgyPSIxIiB5Mj0iMCI+PHN0b3Agc3RvcC1jb2xvcj0iIzM0NzhGNiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0IyNEFGQiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0zMiAzIEMzNiAyMiA0MiAyOCA2MSAzMiBDNDIgMzYgMzYgNDIgMzIgNjEgQzI4IDQyIDIyIDM2IDMgMzIgQzIyIDI4IDI4IDIyIDMyIDMgWiIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==",
  "LinkedIn":"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMEE2NkMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTEwMC4yOCA0NDhINy40VjE0OC45aDkyLjg4ek01My43OSAxMDguMUMyNC4wOSAxMDguMSAwIDgzLjUgMCA1My44YTUzLjc5IDUzLjc5IDAgMCAxIDEwNy41OCAwYzAgMjkuNy0yNC4xIDU0LjMtNTMuNzkgNTQuM3pNNDQ3LjkgNDQ4aC05Mi42OFYzMDIuNGMwLTM0LjctLjctNzkuMi00OC4yOS03OS4yLTQ4LjI5IDAtNTUuNjkgMzcuNy01NS42OSA3Ni43VjQ0OGgtOTIuNzhWMTQ4LjloODkuMDh2NDAuOGgxLjNjMTIuNC0yMy41IDQyLjY5LTQ4LjMgODcuODgtNDguMyA5NCAwIDExMS4yOCA2MS45IDExMS4yOCAxNDIuM1Y0NDh6Ii8+PC9zdmc+",
  "Meta":"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDg2NkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTY0MCAzMTcuOUM2NDAgNDA5LjIgNjAwLjYgNDY2LjQgNTI5LjcgNDY2LjRDNDY3LjEgNDY2LjQgNDMzLjkgNDMxLjggMzcyLjggMzI5LjhMMzQxLjQgMjc3LjJDMzMzLjEgMjY0LjcgMzI2LjkgMjUzIDMyMC4yIDI0Mi4yQzMwMC4xIDI3NiAyNzMuMSAzMjUuMiAyNzMuMSAzMjUuMkMyMDYuMSA0NDEuOCAxNjguNSA0NjYuNCAxMTYuMiA0NjYuNEM0My40MiA0NjYuNCAwIDQwOS4xIDAgMzIwLjVDMCAxNzcuNSA3OS43OCA0Mi40IDE4My45IDQyLjRDMjM0LjEgNDIuNCAyNzcuNyA2Ny4wOCAzMjguNyAxMzEuOUMzNjUuOCA4MS44IDQwNi44IDQyLjQgNDU5LjMgNDIuNEM1NTguNCA0Mi40IDY0MCAxNjguMSA2NDAgMzE3LjlINjQwek0yODcuNCAxOTIuMkMyNDQuNSAxMzAuMSAyMTYuNSAxMTEuNyAxODMgMTExLjdDMTIxLjEgMTExLjcgNjkuMjIgMjE3LjggNjkuMjIgMzIxLjdDNjkuMjIgMzcwLjIgODcuNyAzOTcuNCAxMTguOCAzOTcuNEMxNDkgMzk3LjQgMTY3LjggMzc4LjQgMjIyIDI5My42QzIyMiAyOTMuNiAyNDYuNyAyNTQuNSAyODcuNCAxOTIuMlYxOTIuMnpNNTMxLjIgMzk3LjRDNTYzLjQgMzk3LjQgNTc4LjEgMzY5LjkgNTc4LjEgMzIyLjVDNTc4LjEgMTk4LjMgNTIzLjggOTcuMDggNDU0LjkgOTcuMDhDNDIxLjcgOTcuMDggMzkzLjggMTIzIDM2MCAxNzUuMUMzNjkuNCAxODguOSAzNzkuMSAyMDQuMSAzODkuMyAyMjAuNUw0MjYuOCAyODIuOUM0ODUuNSAzNzcgNTAwLjMgMzk3LjQgNTMxLjIgMzk3LjRMNTMxLjIgMzk3LjR6Ii8+PC9zdmc+"
};
const icon=n=>ICONS[n]||'';

/* ---------- Nova instances ---------- */
let novaCount=0;
function makeNova(target){
  const tpl=$('novaTpl');
  if(!target||!tpl)return null;
  const id='n'+(novaCount++);
  const html=tpl.innerHTML.replace(/__ID__/g,id);
  target.insertAdjacentHTML('beforeend',html);
  return target.querySelector('.nova:last-child');
}
const hubNova=makeNova($('hubNova'));
const svcHeroNova=makeNova($('svcHeroNova'));
const floatNova=makeNova($('novaFloat'));
makeNova($('novaMini'));

/* Eyes follow the pointer */
function lookAt(nova,x,y){
  if(!nova)return;
  const eyes=nova.querySelector('.eyes');if(!eyes)return;
  const r=nova.getBoundingClientRect();const cx=r.left+r.width/2,cy=r.top+r.height*.4;
  const dx=x-cx,dy=y-cy,d=Math.hypot(dx,dy)||1,m=Math.min(1,d/300);
  eyes.style.transform=`translate(${(dx/d)*7*m}px,${(dy/d)*5*m}px)`;
}

/* ---------- Integrations marquee ---------- */
const marqueeEl=$('marquee');
if(marqueeEl){
  const names=Object.keys(ICONS);
  const tiles=names.map(n=>`<div class="logo-tile" title="${n}"><img src="${icon(n)}" alt="${n}" width="32" height="32"></div>`).join('');
  marqueeEl.innerHTML=tiles+tiles.replace(/alt="[^"]*"/g,'alt="" aria-hidden="true"');
}

/* ---------- Hero hub ---------- */
const hub=$('hub'),hubSvg=$('hubLines'),NS='http://www.w3.org/2000/svg';
let hubVisible=Boolean(hub&&hubSvg),hubNodes=[];
if(hub&&hubSvg){
  const hubApps=['Gmail','Google Sheets','HubSpot','Slack','WhatsApp','ChatGPT','Notion','Google Drive','Airtable','Claude'];
  hubNodes=hubApps.map((n,i)=>{
    const el=document.createElement('div');el.className='hub-node';el.title=n;
    el.innerHTML=`<img src="${icon(n)}" alt="${n}">`;hub.appendChild(el);
    const line=document.createElementNS(NS,'line');hubSvg.appendChild(line);
    const dot=document.createElementNS(NS,'circle');dot.setAttribute('r','3');hubSvg.appendChild(dot);
    return {el,line,dot,base:(i/hubApps.length)*Math.PI*2-Math.PI/2,ring:i%2,dir:i%2?1:-1};
  });
}
function drawHub(t){
  if(!hub||!hubNodes.length)return;
  const w=hub.clientWidth,cx=w/2,cy=hub.clientHeight/2;
  hubNodes.forEach((n,i)=>{
    const R=(n.ring?.43:.33)*w;
    const a=n.base+(reduced?0:t*0.00005*(n.ring?1:-1.3));
    const x=cx+Math.cos(a)*R,y=cy+Math.sin(a)*R*.92;
    n.el.style.transform=`translate(${x}px,${y}px)`;
    n.line.setAttribute('x1',cx);n.line.setAttribute('y1',cy);n.line.setAttribute('x2',x);n.line.setAttribute('y2',y);
    const p=reduced?.5:((t*0.00032+i*.137)%1);const q=n.dir>0?p:1-p;
    n.dot.setAttribute('cx',cx+(x-cx)*q);n.dot.setAttribute('cy',cy+(y-cy)*q);
    n.dot.setAttribute('opacity',(Math.sin(p*Math.PI)).toFixed(2));
    if(!reduced&&n.dir>0&&p>.93&&!n.el.classList.contains('ping')){n.el.classList.add('ping');setTimeout(()=>n.el.classList.remove('ping'),500)}
  });
}

/* ---------- Floating Nova + ambient satellites ---------- */
const nf=$('novaFloat'),amb=$('ambient'),ambSvg=$('ambientSvg'),panel=$('novaPanel');
if(nf&&amb&&ambSvg&&panel){
  const satNames=['ChatGPT','Google Sheets','Gmail','Slack','Airtable','HubSpot','Notion','Telegram','WhatsApp','Google Drive','Claude','Gemini','LinkedIn','Meta'];
  const sats=satNames.map(n=>{
    const el=document.createElement('div');el.className='sat';el.innerHTML=`<img src="${icon(n)}" alt="">`;document.body.appendChild(el);
    const line=document.createElementNS(NS,'line');ambSvg.appendChild(line);
    const dot=document.createElementNS(NS,'circle');dot.setAttribute('r','2.6');ambSvg.appendChild(dot);
    return {el,line,dot,x:-100,y:-100,tx:-100,ty:-100,on:false};
  });
  const groups=[[0,2,5,8,1,9],[1,3,4,6,10,11],[0,5,8,12,13,7],[2,3,9,6,11,4],[0,10,11,12,13,8],[5,2,8,1,3,12]];
  const sectionIds=['services','demo','service-demo','process','savings','testimonials','faq','contact'];
  const isDesktop=()=>innerWidth>900&&matchMedia('(pointer:fine)').matches;
  const size=()=>nf.offsetWidth||92;
  const st={x:innerWidth-130,y:innerHeight-150,tx:innerWidth-130,ty:innerHeight-150,rot:0};
  let following=false,idleTimer=null,panelOpen=false,floatOn=false,mouse={x:innerWidth/2,y:innerHeight/2};
  const dock=()=>({x:innerWidth-size()-24,y:innerHeight-size()*1.2-20});
  function goDock(){const d=dock();st.tx=d.x;st.ty=d.y;following=false}
  goDock();st.x=st.tx;st.y=st.ty;

  addEventListener('pointermove',e=>{
    mouse={x:e.clientX,y:e.clientY};
    if(e.pointerType!=='mouse')return;
    lookAt(hubNova,e.clientX,e.clientY);
    lookAt(svcHeroNova,e.clientX,e.clientY);
    if(!floatOn||panelOpen||reduced||!isDesktop())return;
    following=true;
    st.tx=Math.min(Math.max(e.clientX+34,12),innerWidth-size()-12);
    st.ty=Math.min(Math.max(e.clientY+26,86),innerHeight-size()*1.2-12);
    clearTimeout(idleTimer);idleTimer=setTimeout(goDock,2200);
  },{passive:true});

  function setFloat(on){
    floatOn=on;nf.classList.toggle('on',on);
    amb.classList.toggle('on',on&&isDesktop()&&!reduced);
    if(!on)closePanel();
    layoutSats();
  }
  function currentSection(){
    let s=0;sectionIds.forEach((id,i)=>{const el=$(id);if(el&&el.getBoundingClientRect().top<innerHeight*.45)s=i});return Math.min(s,groups.length-1);
  }
  function layoutSats(){
    const gutter=(innerWidth-Math.min(1200,innerWidth-40))/2;
    const show=floatOn&&isDesktop()&&!reduced&&gutter>=84;
    const grp=groups[currentSection()];
    const slots=[[0,.24],[1,.3],[0,.52],[1,.56],[0,.8],[1,.18]];
    sats.forEach((s,i)=>{
      const k=grp.indexOf(i);s.on=show&&k>-1;s.el.classList.toggle('on',s.on);
      if(s.on){const [side,fy]=slots[k];s.tx=side?innerWidth-gutter/2-27:gutter/2-27;s.ty=fy*innerHeight;if(s.x<0){s.x=s.tx;s.y=s.ty}}
    });
  }
  addEventListener('scroll',()=>{if(floatOn)layoutSats()},{passive:true});
  addEventListener('resize',()=>{if(!following)goDock();layoutSats()});

  const heroTarget=$('home')||document.querySelector('.hero');
  if('IntersectionObserver' in window&&heroTarget){
    new IntersectionObserver(([e])=>{hubVisible=Boolean(hub)&&e.isIntersecting;setFloat(!e.isIntersecting)},{threshold:.08}).observe(heroTarget);
  }else setFloat(true);

  function openPanel(){panelOpen=true;panel.classList.add('open');goDock();clearTimeout(idleTimer);nf.setAttribute('aria-expanded','true');if(floatNova){floatNova.classList.add('waving');setTimeout(()=>floatNova.classList.remove('waving'),1900)}}
  function closePanel(){panelOpen=false;panel.classList.remove('open');nf.setAttribute('aria-expanded','false')}
  nf.addEventListener('click',()=>panelOpen?closePanel():openPanel());
  nf.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();panelOpen?closePanel():openPanel()}});
  nf.addEventListener('mouseenter',()=>{if(floatNova){floatNova.classList.add('waving');setTimeout(()=>floatNova.classList.remove('waving'),1900)}});
  $('novaClose').addEventListener('click',closePanel);
  panel.querySelectorAll('[data-close]').forEach(a=>a.addEventListener('click',closePanel));
  addEventListener('keydown',e=>{if(e.key==='Escape')closePanel()});

  function tick(t){
    if(hubVisible)drawHub(t);
    if(floatOn){
      const ease=following?.075:.05;
      const vx=(st.tx-st.x)*ease,vy=(st.ty-st.y)*ease;
      st.x+=vx;st.y+=vy;
      st.rot+=((Math.max(-14,Math.min(14,vx*1.4)))-st.rot)*.12;
      nf.style.transform=`translate(${st.x}px,${st.y}px) rotate(${st.rot}deg)`;
      lookAt(floatNova,mouse.x,mouse.y);
      const ncx=st.x+size()/2,ncy=st.y+size()*.55;
      sats.forEach((s,i)=>{
        if(!s.on){s.line.setAttribute('opacity','0');s.dot.setAttribute('opacity','0');return}
        s.x+=(s.tx-s.x)*.05;s.y+=(s.ty-s.y)*.05;
        const sec=t/1000,x=s.x+Math.sin(sec*.6+i)*6,y=s.y+Math.cos(sec*.7+i*1.3)*9;
        s.el.style.transform=`translate(${x}px,${y}px)`;
        const sx=x+27,sy=y+27;
        const fade=Math.max(.08,Math.min(.45,.5-Math.hypot(sx-ncx,sy-ncy)/innerWidth*.5));
        s.line.setAttribute('opacity',fade.toFixed(2));
        s.line.setAttribute('x1',ncx);s.line.setAttribute('y1',ncy);s.line.setAttribute('x2',sx);s.line.setAttribute('y2',sy);
        const p=(sec*.28+i*.21)%1;
        s.dot.setAttribute('cx',sx+(ncx-sx)*p);s.dot.setAttribute('cy',sy+(ncy-sy)*p);s.dot.setAttribute('opacity',(Math.sin(p*Math.PI)*.9).toFixed(2));
      });
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------- Workflow demo ---------- */
const NSA_ICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="12" rx="5"/><path d="M12 7V4"/><circle cx="12" cy="3" r="1"/><circle cx="9" cy="13" r="1.2" fill="currentColor"/><circle cx="15" cy="13" r="1.2" fill="currentColor"/></svg>';
const T_ICONS={
  agent:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="12" rx="5"/><path d="M12 7V4"/><circle cx="12" cy="3" r="1"/><circle cx="9" cy="13" r="1.2" fill="currentColor"/><circle cx="15" cy="13" r="1.2" fill="currentColor"/></svg>',
  sync:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2.2"/><circle cx="19" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/><path d="M7.2 6h9.6M6.2 8l4.6 8M17.8 8l-4.6 8"/></svg>',
  lead:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l5-5 4 4 8-8"/><path d="M14 8h6v6"/></svg>',
  cv:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  inv:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>',
  prop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>',
  sup:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/></svg>',
  rep:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 16v-4M12 16V8M16 16v-6"/></svg>'
};
const FLOWS=[
  {k:'lead',name:'Lead capture & follow-up',tag:'Sales teams, agencies, trades',sub:'A new website enquiry is qualified, added to the CRM and answered within a minute.',
   steps:[['Gmail','New enquiry','Website form or email arrives'],['NSA','Nova qualifies','Reads the request, scores the lead'],['HubSpot','CRM updated','Contact & deal created'],['Gmail','Instant reply','Personalised response sent'],['Slack','Team alerted','Hot leads flagged to sales']],
   log:['New enquiry received from website form','Nova extracted name, company, budget and need','Lead scored: HIGH (budget & timeline match)','Contact + deal created in HubSpot','Personalised reply sent with booking link','#sales notified in Slack'],
   res:[['< 1 min','response time'],['0','manual data entry'],['100%','enquiries followed up']]},
  {k:'cv',name:'Recruitment intake',tag:'Recruitment agencies, HR',sub:'CVs are parsed, matched to open roles and logged – recruiters only review the shortlist.',
   steps:[['Gmail','CV received','Application lands in inbox'],['NSA','Nova parses CV','Skills, experience & location'],['Airtable','Candidate logged','Record added to database'],['NSA','Role matching','Scored against open roles'],['Slack','Shortlist sent','Recruiter reviews top matches']],
   log:['Application received: Senior Accountant (Leeds)','CV parsed – 8 yrs experience, ACCA, Leeds-based','Candidate record created in Airtable','Matched to 2 open roles (scores 91%, 78%)','Shortlist posted to recruiter in Slack','Human review step: awaiting recruiter approval'],
   res:[['~2 min','per CV processed'],['Zero','copy & paste'],['Human','final decision']]},
  {k:'inv',name:'Invoice chasing',tag:'Finance, accountants, SMEs',sub:'Overdue invoices are found and polite reminders drafted – you approve anything unusual.',
   steps:[['Google Sheets','Invoices checked','Daily scan of the ledger'],['NSA','Overdue found','Due dates & amounts checked'],['NSA','Reminder drafted','Tone set by days overdue'],['Gmail','Reminder sent','Or queued for approval'],['Google Sheets','Ledger updated','Status & chase date logged']],
   log:['Daily check started: 46 open invoices','3 invoices overdue (7, 14 and 31 days)','Friendly reminders drafted for 7 & 14 days','31-day invoice flagged for your approval','2 reminders sent from accounts@ mailbox','Ledger updated with chase status'],
   res:[['Daily','automatic checks'],['Faster','cash collection'],['You','approve exceptions']]},
  {k:'prop',name:'Property enquiries',tag:'Estate & letting agents',sub:'Viewing requests are answered out of hours and booked straight into the diary.',
   steps:[['WhatsApp','Viewing request','Message from portal or WhatsApp'],['NSA','Nova responds','Answers questions instantly'],['Google Drive','Details shared','Brochure & floorplan sent'],['Gmail','Viewing booked','Calendar invite confirmed'],['HubSpot','CRM updated','Applicant logged & tagged']],
   log:['WhatsApp: "Is the 2-bed on Elm Road still available?"','Nova confirmed availability and key details','Brochure and floorplan shared from Google Drive','Viewing booked for Saturday 10:30 – invite sent','Applicant added to CRM with requirements','Negotiator notified of new booking'],
   res:[['24/7','instant replies'],['More','viewings booked'],['Less','phone tag']]},
  {k:'sup',name:'Customer support agent',tag:'E-commerce, services, SaaS',sub:'An AI agent answers common questions using your knowledge base and hands off tricky ones.',
   steps:[['Gmail','Ticket arrives','Email or chat message'],['NSA','Nova understands','Intent & urgency detected'],['Notion','Knowledge check','Answer from your docs'],['Gmail','Reply sent','Accurate, on-brand answer'],['Slack','Escalation','Complex cases to a human']],
   log:['New message: "Where is my order #10482?"','Intent: order status · urgency: normal','Order status retrieved – dispatched yesterday','Reply sent with tracking link','Refund request detected in second ticket → escalated','Support lead notified in Slack'],
   res:[['Seconds','first response'],['24/7','coverage'],['Smart','human hand-off']]},
  {k:'rep',name:'Weekly reporting',tag:'Owners, ops & management',sub:'Numbers from every system are pulled together and summarised in plain English.',
   steps:[['HubSpot','Sales data','Pipeline & won deals'],['Google Sheets','Finance data','Revenue & costs'],['NSA','Nova analyses','Trends & highlights'],['Google Sheets','Report built','Dashboard refreshed'],['Gmail','Delivered','Monday 8am in your inbox']],
   log:['Scheduled run: Monday 07:55','Pulled 312 CRM records and 4 finance tabs','Nova summarised: revenue +12% vs last week','Dashboard refreshed with latest figures','Summary emailed to directors','Next run scheduled for next Monday'],
   res:[['Hours','saved weekly'],['One','source of truth'],['Auto','delivered']]},
  {k:'agent',name:'Inbox triage & research agent',tag:'Directors, client services',sub:'An AI agent reads incoming threads, checks internal SOPs in Notion and drafts a ready-to-send reply.',
   steps:[['Gmail','Thread arrives','Client email hits shared inbox'],['NSA','Nova reads context','Extracts intent & account history'],['Notion','SOP & pricing check','Pulls approved company terms'],['Gmail','Draft created','Personalised reply queued in Drafts'],['Slack','Owner pinged','One-click approval sent to Slack']],
   log:['Inbound email from Acme Ltd requesting Q3 scope change','Agent matched account notes & pricing rules in Notion','Draft reply prepared in client tone (420 chars)','Approval card posted to #client-ops in Slack','Director clicked Approve – reply sent from Gmail','Activity logged against account record'],
   res:[['~30 sec','draft ready'],['100%','on-brand tone'],['Human','final sign-off']]},
  {k:'sync',name:'Order-to-delivery sync',tag:'Operations, B2B teams',sub:'New deals trigger project folders, onboarding tasks and team notifications without touching a spreadsheet.',
   steps:[['HubSpot','Deal won','Stage moves to Closed Won'],['Google Drive','Folder created','Client workspace & templates cloned'],['Airtable','Tasks assigned','Onboarding checklist generated'],['Gmail','Welcome sent','Client receives kickoff form'],['Slack','Team notified','Project channel updated']],
   log:['HubSpot webhook: Deal "Northgate Logistics" won','Client folder + NDA template created in Google Drive','14 onboarding tasks created in Airtable','Welcome email & kickoff link sent via Gmail','Summary posted to #delivery-team in Slack','Zero manual copy-paste required'],
   res:[['Instant','project kickoff'],['Zero','missed steps'],['Full','audit trail']]}
];

const tabsEl=$('demoTabs'),flowEl=$('flow'),con=$('console'),resEl=$('demoResult'),runBtn=$('runBtn');
if(flowEl&&con&&resEl&&runBtn){
  const filterAttr=(tabsEl&&tabsEl.dataset.flows)||flowEl.dataset.flow||'';
  const activeFlows=filterAttr?filterAttr.split(',').map(k=>FLOWS.find(f=>f.k===k.trim())).filter(Boolean):FLOWS.slice(0,6);
  let cur=0,timers=[];
  if(tabsEl){
    tabsEl.innerHTML=activeFlows.map((f,i)=>`<button class="demo-tab${i?'':' active'}" role="tab" aria-selected="${!i}" data-i="${i}"><span class="t-ico">${T_ICONS[f.k]}</span><span><b>${f.name}</b><small>${f.tag}</small></span></button>`).join('');
    tabsEl.addEventListener('click',e=>{const b=e.target.closest('.demo-tab');if(b)select(+b.dataset.i)});
  }
  const check='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
  const chip=n=>n==='NSA'?`<div class="chip nsa">${NSA_ICON}<span class="check">${check}</span></div>`:`<div class="chip"><img src="${icon(n)}" alt="${n}"><span class="check">${check}</span></div>`;
  const stamp=i=>new Date(2026,0,1,9,14,5+i*3).toTimeString().slice(0,8);
  function select(i){
    timers.forEach(clearTimeout);timers=[];cur=i;const f=activeFlows[i];if(!f)return;
    if(tabsEl)tabsEl.querySelectorAll('.demo-tab').forEach((b,j)=>{b.classList.toggle('active',j===i);b.setAttribute('aria-selected',j===i)});
    $('demoTitle').textContent=f.name;$('demoSub').textContent=f.sub;
    flowEl.innerHTML=f.steps.map((s,j)=>(j?'<div class="flow-link"></div>':'')+`<div class="flow-step">${chip(s[0])}<div><div class="label">${s[1]}</div><div class="desc">${s[2]}</div></div></div>`).join('');
    con.innerHTML='<div class="row show idle">› Press “Run workflow” to watch Nova process this example.</div>';
    resEl.innerHTML=f.res.map(r=>`<div><b>${r[0]}</b><span>${r[1]}</span></div>`).join('');
    runBtn.disabled=false;
  }
  runBtn.addEventListener('click',()=>{
    const f=activeFlows[cur];select(cur);con.innerHTML='';runBtn.disabled=true;
    const steps=[...flowEl.querySelectorAll('.flow-step')],links=[...flowEl.querySelectorAll('.flow-link')];
    const gap=reduced?60:850;
    steps.forEach((s,j)=>{
      timers.push(setTimeout(()=>{
        if(j>0){steps[j-1].classList.remove('active');steps[j-1].classList.add('done');links[j-1].classList.add('lit')}
        s.classList.add('active');
      },j*gap));
    });
    timers.push(setTimeout(()=>{steps.at(-1).classList.remove('active');steps.at(-1).classList.add('done')},steps.length*gap));
    const lg=(steps.length*gap)/f.log.length;
    f.log.forEach((l,j)=>{
      const row=document.createElement('div');row.className='row';row.innerHTML=`<span class="ts">${stamp(j)}</span><span>${j===f.log.length-1?'<span class="ok">✓</span> ':'→ '}${l}</span>`;con.appendChild(row);
      timers.push(setTimeout(()=>row.classList.add('show'),j*lg+120));
    });
    timers.push(setTimeout(()=>{const r=document.createElement('div');r.className='row show';r.innerHTML='<span class="ts">done</span><span class="ok">Workflow completed successfully – no manual steps required.</span>';con.appendChild(r);runBtn.disabled=false},steps.length*gap+250));
  });
  select(0);
}

/* ---------- Savings calculator ---------- */
if($('rHours')){
  const fmt=n=>n.toLocaleString('en-GB');
  const calc=()=>{
    const h=+$('rHours').value,t=+$('rTeam').value,c=+$('rCover').value,r=+$('rRate').value;
    ['rHours','rTeam','rCover','rRate'].forEach(id=>{const el=$(id);el.style.setProperty('--p',((el.value-el.min)/(el.max-el.min)*100)+'%')});
    $('oHours').textContent=h;$('oTeam').textContent=t;$('oCover').textContent=c+'%';$('oRate').textContent='£'+r;
    const wk=h*t*c/100,yr=wk*52;
    $('cWeek').textContent=fmt(Math.round(wk))+' hrs';$('cMonth').textContent=fmt(Math.round(yr/12))+' hrs';
    $('cYearHrs').textContent=fmt(Math.round(yr))+' hrs';$('cFte').textContent=(wk/37.5).toFixed(1)+' FTE';
    $('cYear').textContent='£'+fmt(Math.round(yr*r/10)*10);
  };
  ['rHours','rTeam','rCover','rRate'].forEach(id=>$(id).addEventListener('input',calc));
  calc();
}

/* ---------- Contact form ---------- */
const form=$('contactForm');
if(form){
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    let ok=true;
    form.querySelectorAll('.form-err-msg').forEach(el=>el.remove());
    form.querySelectorAll('[required]').forEach(inp=>{
      const f=inp.closest('.field');
      const valid=inp.type==='checkbox'?inp.checked:inp.type==='email'?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value.trim()):inp.value.trim()!=='';
      if(f)f.classList.toggle('invalid',!valid);
      if(inp.type==='checkbox'){inp.closest('.consent').style.color=valid?'':'#c62f34'}
      if(!valid)ok=false;
    });
    if(!ok){const first=form.querySelector('.invalid input,.invalid select,.invalid textarea,.consent input');first&&first.focus();return}
    const data=Object.fromEntries(new FormData(form));
    const endpoint=form.dataset.endpoint;
    const btn=$('sendBtn');btn.disabled=true;btn.style.opacity=.7;
    if(endpoint){
      try{
        data.page=location.href;
        const isGAS=endpoint.includes('script.google.com');
        const r=await fetch(endpoint,{method:'POST',headers:isGAS?{'Content-Type':'text/plain;charset=utf-8'}:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify(data)});
        if(!r.ok)throw 0;
        if(isGAS){const j=await r.json();if(j.result!=='success')throw 0}
        form.classList.add('sent');form.reset();
      }
      catch(_){btn.disabled=false;btn.style.opacity=1;alertBox('Sorry, something went wrong. Please email hello@nextstepautomate.com directly.')}
    }else{
      const body=`Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nPhone: ${data.phone||'-'}\nInterested in: ${data.interest}\nCompany size: ${data.size||'-'}\n\n${data.message}`;
      location.href='mailto:hello@nextstepautomate.com?subject='+encodeURIComponent('Demo request – '+data.company)+'&body='+encodeURIComponent(body);
      $('successMsg').textContent='Your email app should now open with your enquiry ready to send. If it doesn\'t, email us at hello@nextstepautomate.com.';
      form.classList.add('sent');
    }
  });
  form.querySelectorAll('input,select,textarea').forEach(i=>i.addEventListener('input',()=>{
    const f=i.closest('.field');if(f)f.classList.remove('invalid');
    if(i.type==='checkbox'&&i.checked)i.closest('.consent').style.color='';
  }));
  function alertBox(msg){
    form.querySelectorAll('.form-err-msg').forEach(el=>el.remove());
    const p=document.createElement('p');p.className='form-err-msg';p.style.cssText='color:#c62f34;font-size:.86rem;margin-top:12px';p.textContent=msg;form.querySelector('.form-foot').after(p);
  }
}

/* ---------- Nav, dropdown, reveal, misc ---------- */
const burger=$('burger'),menu=$('mobileMenu'),navDd=$('navServices'),mobDd=$('mobServices');
const navDdBtn=navDd&&navDd.querySelector('.nav-dd-btn'),mobDdBtn=mobDd&&mobDd.querySelector('.mob-dd-btn');
function setNavDd(open){if(!navDd||!navDdBtn)return;navDd.classList.toggle('open',open);navDdBtn.setAttribute('aria-expanded',String(open))}
if(navDd&&navDdBtn){
  navDdBtn.addEventListener('click',e=>{e.stopPropagation();setNavDd(!navDd.classList.contains('open'))});
  navDd.querySelectorAll('.nav-dd-menu a').forEach(a=>a.addEventListener('click',()=>setNavDd(false)));
  document.addEventListener('click',e=>{if(!navDd.contains(e.target))setNavDd(false)});
  addEventListener('keydown',e=>{if(e.key==='Escape'&&navDd.classList.contains('open')){setNavDd(false);navDdBtn.focus()}});
}
if(mobDd&&mobDdBtn){
  mobDdBtn.addEventListener('click',()=>{const o=mobDd.classList.toggle('open');mobDdBtn.setAttribute('aria-expanded',String(o))});
}
if(burger&&menu){
  burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o);if(!o&&mobDd&&mobDdBtn){mobDd.classList.remove('open');mobDdBtn.setAttribute('aria-expanded','false')}});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');burger.setAttribute('aria-expanded','false');if(mobDd&&mobDdBtn){mobDd.classList.remove('open');mobDdBtn.setAttribute('aria-expanded','false')}}));
}
if('IntersectionObserver' in window&&!reduced){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  if(document.body.dataset.page==='home'){
    const links=[...document.querySelectorAll('.nav-links > a, .nav-dd-btn')];
    const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',(a.dataset.section||(a.getAttribute('href')||'').slice(1))===e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
    ['services','demo','process','testimonials','faq','contact'].map(id=>$(id)).filter(Boolean).forEach(el=>so.observe(el));
  }
}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('show'));

if($('yr'))$('yr').textContent=new Date().getFullYear();
})();
