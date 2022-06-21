[XCX_EMANUAL_1E]
moduleMatches = 0xF882D5CF ; 1.0.1E

; ----------------------------------------------------------------------------
; WHO  : menu::MenuMainMenu::funcManual((int))
; WHAT : Replace eManual function with timeManipulate function

_openTimeManipulate = 0x02C7A2F0
_isFinishTM = 0x02C7A4CC ; MenuTask::isFinishTimeManipulate((void))

0x02B83CB4 = bl _openTimeManipulate
0x02B83CCC = bl _openTimeManipulate

0x02B83C7C = bl _isFinishTM
0x02B83C98 = bl _isFinishTM

#################################################################################
[XCX_EMANUAL_2U]
moduleMatches = 0x30B6E091 ; 1.0.2U

_openTimeManipulate = 0x02C7A290
_isFinishTM = 0x02C7A46C ; MenuTask::isFinishTimeManipulate((void))

0x02B83CA4 = bl _openTimeManipulate
0x02B83CBC = bl _openTimeManipulate

0x02B83C6C = bl _isFinishTM
0x02B83C88 = bl _isFinishTM

#################################################################################
[XCX_EMANUAL_1U]
moduleMatches = 0xAB97DE6B ; 1.0.1U

_openTimeManipulate = 0x02C7A118
_isFinishTM = 0x02C7A2F4 ; MenuTask::isFinishTimeManipulate((void))

0x02B83C28 = bl _openTimeManipulate
0x02B83C40 = bl _openTimeManipulate

0x02B83BF0 = bl _isFinishTM
0x02B83C0C = bl _isFinishTM
