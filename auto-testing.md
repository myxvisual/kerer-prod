# SDK 自动化测试流程

```mermaid
graph LR

Feature1[Feature1]
Feature2[Feature2]
Feature3[Feature3]
GithubRelease[Github Release]
Mobile[Mobile]
WEB[WEB]
Desktop[Desktop]
Packager[Packager]
UnitTesting[Unit Testing]
ProductRelease[Product Release]
UITesting[UI Testing]
AutomationServer[Automation Server]

Feature1 --> GithubRelease
Feature2 --> GithubRelease
Feature3 --> GithubRelease

GithubRelease --> |Webhook| AutomationServer

AutomationServer --> UnitTesting
AutomationServer --> Packager

Packager --> Mobile
Packager --> WEB
Packager --> Desktop

Mobile --> ProductRelease
WEB --> ProductRelease
Desktop --> ProductRelease
ProductRelease --> UITesting

````
