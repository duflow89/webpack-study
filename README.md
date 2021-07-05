# webpack-study


---

## ETC

### npm WARN

아래와 같은 경고문이 나오는 경우 :

```bash
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\sass\node_modules\fsevents):     
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
```

fsevents 패키지 모듈은 macOS(OSX)용 이므로 windows에서는 경고 메시지가 출력  
설치 시, `npm install --no-optional {package-name}`  
기존 파일 수정 시 `npm i -f`
