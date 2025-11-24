### about.md

```html

<!doctype html>
<!-- ✨ Built with Framer • https://www.framer.com/ -->
<html lang="en">
<head>
    <meta charset="utf-8">
    <script type="importmap" data-framer-importmap>{"imports":{"__framer-badge":"https://framerusercontent.com/modules/kr6mBIQPAjMiv35rQa3A/JqQCEBMftp0u8SBv29R5/PX9hIOIVM.js","@emotion/hash":"https://ga.jspm.io/npm:@emotion/hash@0.8.0/dist/hash.browser.esm.js","@motionone/dom":"https://ga.jspm.io/npm:@motionone/dom@10.12.0/dist/index.es.js","@motionone/easing":"https://ga.jspm.io/npm:@motionone/easing@10.13.1/dist/index.es.js","@motionone/utils":"https://ga.jspm.io/npm:@motionone/utils@10.12.0/dist/index.es.js","@react-three/drei":"https://ga.jspm.io/npm:@react-three/drei@8.3.1/index.js","@react-three/fiber":"https://ga.jspm.io/npm:@react-three/fiber@7.0.24/dist/react-three-fiber.esm.js","airtable":"https://ga.jspm.io/npm:airtable@0.11.1/lib/airtable.js","canvas-confetti":"https://ga.jspm.io/npm:canvas-confetti@1.4.0/src/confetti.js","color-diff":"https://ga.jspm.io/npm:color-diff@1.2.0/lib/index.js","color-hash":"https://ga.jspm.io/npm:color-hash@2.0.1/dist/color-hash.js","framer-motion-3d":"https://ga.jspm.io/npm:framer-motion-3d@6.0.0-beta.8/dist/es/index.mjs","framesync":"https://ga.jspm.io/npm:framesync@6.1.2/dist/es/index.mjs","motion":"https://ga.jspm.io/npm:motion@10.12.0/dist/main.es.js","popmotion":"https://ga.jspm.io/npm:popmotion@11.0.3/dist/es/index.mjs","react-confetti":"https://ga.jspm.io/npm:react-confetti@6.0.1/dist/react-confetti.min.js","shopify-buy":"https://ga.jspm.io/npm:shopify-buy@2.14.0/index.js","style-value-types":"https://ga.jspm.io/npm:style-value-types@5.1.0/dist/es/index.mjs","three":"https://ga.jspm.io/npm:three@0.136.0/build/three.module.js","tinycolor2":"https://ga.jspm.io/npm:tinycolor2@1.4.2/tinycolor.js","valtio":"https://ga.jspm.io/npm:valtio@1.2.9/esm/index.js","zustand":"https://ga.jspm.io/npm:zustand@3.7.1/esm/index.js","zustand/middleware":"https://ga.jspm.io/npm:zustand@3.7.1/esm/middleware.js","hsluv":"https://ga.jspm.io/npm:hsluv@1.0.0/dist/esm/hsluv.js","#framer/local/canvasComponent/apLIssaDb/apLIssaDb.js":"https://framerusercontent.com/modules/fardSfxStV68QA0Dvm86/4HTfO3rRiBoFcD4QWu20/apLIssaDb.js","#framer/local/canvasComponent/AvhGNtIBr/AvhGNtIBr.js":"https://framerusercontent.com/modules/w44uIK9cuVf9BrmDrojp/Z2wnMlzS4RIfOHtV8aHm/AvhGNtIBr.js","#framer/local/canvasComponent/aW9VRm5iB/aW9VRm5iB.js":"https://framerusercontent.com/modules/oEn4vhSCjHxohkeT1X5F/DP7eCqExF4nsopSdVa4o/aW9VRm5iB.js","#framer/local/canvasComponent/BF1dlq0Pk/BF1dlq0Pk.js":"https://framerusercontent.com/modules/8x2GTrLpqxum8H4SfWy7/wtFjRAii2rjDllA88ANg/BF1dlq0Pk.js","#framer/local/canvasComponent/BrnbLCYls/BrnbLCYls.js":"https://framerusercontent.com/modules/712sggAZDpg9epKmmp8m/biHNgjHPjdM3oAtmvpGw/BrnbLCYls.js","#framer/local/canvasComponent/BUx7IfaCX/BUx7IfaCX.js":"https://framerusercontent.com/modules/4oW0gsmVtqmPtuING7cx/xAXH6hZst6AojXwsBdHz/BUx7IfaCX.js","#framer/local/canvasComponent/bWvdRXx6z/bWvdRXx6z.js":"https://framerusercontent.com/modules/2UjXqpama1pBsaZX43iG/iC8g0Y90SQEJLqwAR0uL/bWvdRXx6z.js","#framer/local/canvasComponent/dGLbty6HD/dGLbty6HD.js":"https://framerusercontent.com/modules/pWyV3jun07tWFCf3nITp/mCZSCpgZryJMlhdXSsrL/dGLbty6HD.js","#framer/local/canvasComponent/DkmCTp74x/DkmCTp74x.js":"https://framerusercontent.com/modules/exz0g2yo3wYJewETwkCN/64EXJ1GkEffGmdGGA5hX/DkmCTp74x.js","#framer/local/canvasComponent/DZ82nMGVn/DZ82nMGVn.js":"https://framerusercontent.com/modules/1NzNR2cfEUPq9nUJKOVr/xNZVXuOX3FGOmf3azohZ/DZ82nMGVn.js","#framer/local/canvasComponent/ELKUrpUpR/ELKUrpUpR.js":"https://framerusercontent.com/modules/a5c5kdpgXZHFPYaCzw5u/llxJKPJeQv6qp71eHnZm/ELKUrpUpR.js","#framer/local/canvasComponent/EymF6x6Kn/EymF6x6Kn.js":"https://framerusercontent.com/modules/ts72xL41ojYBU3fK2UxH/JV8I7X7BeCJcnYLEvZgj/EymF6x6Kn.js","#framer/local/canvasComponent/eZyO18BtR/eZyO18BtR.js":"https://framerusercontent.com/modules/a1rEHhQdVUsLgtNwX6M6/lchTqdv54N6RzTquBSMC/eZyO18BtR.js","#framer/local/canvasComponent/fSyvSiQWz/fSyvSiQWz.js":"https://framerusercontent.com/modules/6RQDk1CWjOS3FdWd7wFQ/wIzfTBZaSDLaMBJHPWmB/fSyvSiQWz.js","#framer/local/canvasComponent/GExAvQu8I/GExAvQu8I.js":"https://framerusercontent.com/modules/hm8uXBO0iAqcPYA0sXt3/S9gWRCBO4rUobUNVAzho/GExAvQu8I.js","#framer/local/canvasComponent/h3GcrBEFj/h3GcrBEFj.js":"https://framerusercontent.com/modules/k8yorerI9pWhZbUuLz4D/OTO8ari1uhJVtsLUh6K7/h3GcrBEFj.js","#framer/local/canvasComponent/HG6x6W1NA/HG6x6W1NA.js":"https://framerusercontent.com/modules/tWAphOL6ugLsD7MAwkHk/iamwwO0kVZD4z7gABuPJ/HG6x6W1NA.js","#framer/local/canvasComponent/iAiifgtN6/iAiifgtN6.js":"https://framerusercontent.com/modules/kR80meioWOzAf1n827oO/nM5cHmRvQr9lvPmMmrfO/iAiifgtN6.js","#framer/local/canvasComponent/iCVABQYBt/iCVABQYBt.js":"https://framerusercontent.com/modules/jzjova2mzHwzZAILoEKy/lY0wlAh8USmqzEykSjwy/iCVABQYBt.js","#framer/local/canvasComponent/iPDUOl84D/iPDUOl84D.js":"https://framerusercontent.com/modules/oXD9Voax5sn7CNVLy3a8/2wGF1ei0VwRSffSENUjg/iPDUOl84D.js","#framer/local/canvasComponent/iQ94HiBEI/iQ94HiBEI.js":"https://framerusercontent.com/modules/3e9cFCvuJfrJREvwvUBt/Fwc9kMXEqnG8rO4etAxJ/iQ94HiBEI.js","#framer/local/canvasComponent/ISr6HofkI/ISr6HofkI.js":"https://framerusercontent.com/modules/aPlGMViAmG5YH9jBK651/Zsm4fIrXsrhNvr0sqKnl/ISr6HofkI.js","#framer/local/canvasComponent/ItP9HSYrE/ItP9HSYrE.js":"https://framerusercontent.com/modules/ybnq2XbpeSbH9BKt0maw/iY61W3f410KxKvgRlxRs/ItP9HSYrE.js","#framer/local/canvasComponent/jLyiDcK2q/jLyiDcK2q.js":"https://framerusercontent.com/modules/grbbOEp4gB87L8N6Mgmr/thy6kDgLGK0UtA9ylhvw/jLyiDcK2q.js","#framer/local/canvasComponent/K0g6jN7mL/K0g6jN7mL.js":"https://framerusercontent.com/modules/1zlCemnYBXBksHjLoQ30/LB8LMZZQlwMXY9AIBo3d/K0g6jN7mL.js","#framer/local/canvasComponent/kl7SbRfSy/kl7SbRfSy.js":"https://framerusercontent.com/modules/rt9DIY9L1CCBMw2Nd5JW/hnNvoIEOwJvgXJTXkDQU/kl7SbRfSy.js","#framer/local/canvasComponent/lt5m6crwq/lt5m6crwq.js":"https://framerusercontent.com/modules/rp4qG9khHFBASBDU2CkL/t4wrJUWWR7hMd8MSbCht/lt5m6crwq.js","#framer/local/canvasComponent/mVvoce0Dt/mVvoce0Dt.js":"https://framerusercontent.com/modules/4W5sKf4RrOhLeHNIQngG/EcVg1j771KV8fGrDvP1B/mVvoce0Dt.js","#framer/local/canvasComponent/N6dzfwEkc/N6dzfwEkc.js":"https://framerusercontent.com/modules/951lgu3xXIDE4d6jcWD7/ft6Vb0qQS0p5LVqpOJdH/N6dzfwEkc.js","#framer/local/canvasComponent/na8LOtMOm/na8LOtMOm.js":"https://framerusercontent.com/modules/kKSnLEMKPHZ1cDK4CeLh/5aU4f5l4YEEGbWAd3lwq/na8LOtMOm.js","#framer/local/canvasComponent/NL5sh2fyr/NL5sh2fyr.js":"https://framerusercontent.com/modules/xmdQISVdX9NSJxQNolKV/PomfxEJLK3Bxcft2DsqL/NL5sh2fyr.js","#framer/local/canvasComponent/O2F_D_Tf1/O2F_D_Tf1.js":"https://framerusercontent.com/modules/dJiZioTMHqAkbinKdfiJ/1TRbcW0pGh7D9lYbNpWM/O2F_D_Tf1.js","#framer/local/canvasComponent/o9cYF3ZJy/o9cYF3ZJy.js":"https://framerusercontent.com/modules/wnzmoJoGThNAmQOxTtaU/5DoFUqwbWWEEdotBObCN/o9cYF3ZJy.js","#framer/local/canvasComponent/odk9H3O3f/odk9H3O3f.js":"https://framerusercontent.com/modules/m98QviC6xiQ08dIvkJ6u/nxy0eGtuleMZVkYpjytC/odk9H3O3f.js","#framer/local/canvasComponent/oLjoWhRMp/oLjoWhRMp.js":"https://framerusercontent.com/modules/ufZasixBJZJtXyyd4IGs/El47gbDpCikhHI9FEErE/oLjoWhRMp.js","#framer/local/canvasComponent/P4MqqRHTW/P4MqqRHTW.js":"https://framerusercontent.com/modules/i8Jbw9ZCMyvTBkZWRl1F/MBI1J2G7cE21wYzC9Htb/P4MqqRHTW.js","#framer/local/canvasComponent/pSBjMJIlu/pSBjMJIlu.js":"https://framerusercontent.com/modules/p3lyppcPRy7kNk3jN5LH/QBIN6gWBIOnSES2PkY9L/pSBjMJIlu.js","#framer/local/canvasComponent/PYnmTXWKe/PYnmTXWKe.js":"https://framerusercontent.com/modules/gswlXanv5Xt6Tjm5QqDf/iFl9ElaF2GDBull7eerC/PYnmTXWKe.js","#framer/local/canvasComponent/qsi4mY6wJ/qsi4mY6wJ.js":"https://framerusercontent.com/modules/kQzCVeZRkDICkcFBo42c/3bTfYsQdonPWQYhtTqbq/qsi4mY6wJ.js","#framer/local/canvasComponent/RCTQaifkZ/RCTQaifkZ.js":"https://framerusercontent.com/modules/91JFwOSBBpKuwSCx2yyq/aq0E1MyXgnDMg8d57AYb/RCTQaifkZ.js","#framer/local/canvasComponent/SdLGUnYIQ/SdLGUnYIQ.js":"https://framerusercontent.com/modules/lb2pPxK0MwdzdqWRQrIz/s8LoQ71VSso3dh3r3chW/SdLGUnYIQ.js","#framer/local/canvasComponent/SgRAmO1p6/SgRAmO1p6.js":"https://framerusercontent.com/modules/jBlE3nZG2qZ29IDhaySJ/ychBaeqJiYfiU0ut07WE/SgRAmO1p6.js","#framer/local/canvasComponent/SiL7oMfx6/SiL7oMfx6.js":"https://framerusercontent.com/modules/vZWGAAgZyzuTFDE0oN4B/xIjGtOfh3HVeubVPPMlz/SiL7oMfx6.js","#framer/local/canvasComponent/soPdCQegK/soPdCQegK.js":"https://framerusercontent.com/modules/3J69MgWN70hezWSZGdhJ/ySzbGmoBlRHMGzf46QjY/soPdCQegK.js","#framer/local/canvasComponent/SwNo4dVeY/SwNo4dVeY.js":"https://framerusercontent.com/modules/p73v5gZFff4ZCXCwP4EV/llY1ChVSpkT1UuGPNH8l/SwNo4dVeY.js","#framer/local/canvasComponent/tAVKkJIAA/tAVKkJIAA.js":"https://framerusercontent.com/modules/kOMOUwINdERWxDneYhPV/bYiouXAmgwJsrNsNR5QJ/tAVKkJIAA.js","#framer/local/canvasComponent/TinS7d1VM/TinS7d1VM.js":"https://framerusercontent.com/modules/rVqkKgz5kwuKgXRxonFZ/CJZ9NX5lGvel2MJbvy2E/TinS7d1VM.js","#framer/local/canvasComponent/Ue9jLfi4f/Ue9jLfi4f.js":"https://framerusercontent.com/modules/cQihVXDbl7yPykiCqk97/1YObTvz3UfaspsxSqAN9/Ue9jLfi4f.js","#framer/local/canvasComponent/UgVKHG97T/UgVKHG97T.js":"https://framerusercontent.com/modules/jdYhTrHQxL7lsFoqZIGO/QHIZDHlmTccYqc4KYyUw/UgVKHG97T.js","#framer/local/canvasComponent/uNWvnw1CL/uNWvnw1CL.js":"https://framerusercontent.com/modules/tNMFa1a5IMZBPEAGnDg3/4pHENDO3V5sTU6n6Xcfu/uNWvnw1CL.js","#framer/local/canvasComponent/VeCzBI2z1/VeCzBI2z1.js":"https://framerusercontent.com/modules/drPpgEPTN3lS7JAYanXH/9QS2J9TYiqFcNK8IgfLy/VeCzBI2z1.js","#framer/local/canvasComponent/V_EPpHcDq/V_EPpHcDq.js":"https://framerusercontent.com/modules/ksXWazvB69aQwy8AZELD/3wsf2JVF0giHX6ms5YwG/V_EPpHcDq.js","#framer/local/canvasComponent/vNmfyiTHH/vNmfyiTHH.js":"https://framerusercontent.com/modules/pklIie9DcWByPLx5g7Dj/v1PapByNz5C9yCCcy3Vg/vNmfyiTHH.js","#framer/local/canvasComponent/x75K5R4Jy/x75K5R4Jy.js":"https://framerusercontent.com/modules/3eYTKfve3d9krFOWfca2/53Jyxs0QWOtStydcWfXJ/x75K5R4Jy.js","#framer/local/canvasComponent/xaVp5DLlU/xaVp5DLlU.js":"https://framerusercontent.com/modules/17k8YRrYXliasQhLKFuZ/L3B0P9kJ0zOLZNZz8gpr/xaVp5DLlU.js","#framer/local/canvasComponent/XCdaTRAgz/XCdaTRAgz.js":"https://framerusercontent.com/modules/tRFj7D5uhmz0ucXOfKWE/0CGvY1xmoKT8PmTLwuKO/XCdaTRAgz.js","#framer/local/canvasComponent/xniHmWX9O/xniHmWX9O.js":"https://framerusercontent.com/modules/rmwxgitpmu6IcaOTcSEU/tx0OebGDkDv7X5IgBXOU/xniHmWX9O.js","#framer/local/canvasComponent/XSeegWCWP/XSeegWCWP.js":"https://framerusercontent.com/modules/h4zEiRtVf4uLMEeOY2x9/x7Cwd0ovnTsXhzS2t1V3/XSeegWCWP.js","#framer/local/canvasComponent/xyg9nnzQ8/xyg9nnzQ8.js":"https://framerusercontent.com/modules/yQ8A3gDyVDaN6TK71sj8/jFSQOc7mGTgJubUlMD7g/xyg9nnzQ8.js","#framer/local/canvasComponent/Y4rigPFUB/Y4rigPFUB.js":"https://framerusercontent.com/modules/bb4Xw4Vx40YB0QUbd9NL/AOhfLqg5KX3XC1OkUvmZ/Y4rigPFUB.js","#framer/local/canvasComponent/ySe777ATA/ySe777ATA.js":"https://framerusercontent.com/modules/znMRQUPxJpfyMlntGRCn/J446kOd7s6t3E1OHgmgQ/ySe777ATA.js","#framer/local/canvasComponent/yv1JeFnaH/yv1JeFnaH.js":"https://framerusercontent.com/modules/oXRdeBk6ABuMRofc8wBa/3vYsnzWjZ3bNS37BInm1/yv1JeFnaH.js","#framer/local/canvasComponent/z1F91LPgn/z1F91LPgn.js":"https://framerusercontent.com/modules/xUS7i2pRiPsWgM2PuUZ1/GvjQFhz2cLfMara8oEVS/z1F91LPgn.js","#framer/local/canvasComponent/Z4SSVZix2/Z4SSVZix2.js":"https://framerusercontent.com/modules/1chXFMr3tfWkwtnV0ecy/Vm6fiCS7GJ3cHIY0JCFO/Z4SSVZix2.js","#framer/local/collection/IolxvIcw_/IolxvIcw_.js":"https://framerusercontent.com/modules/a5009nqlZAR5kf8Bdc2E/HOddMzlg3BUAB6AjCX1Y/IolxvIcw_.js","#framer/local/collection/KWPByELyQ/KWPByELyQ.js":"https://framerusercontent.com/modules/2fjHjKdVWaz6jgCRM70A/9Ej59O6OAc0htHB5JnEn/KWPByELyQ.js","#framer/local/collection/ndtk0G5Zk/ndtk0G5Zk.js":"https://framerusercontent.com/modules/67RJKo8m4BlIAek3Zm9s/wuQCaZkjqV07N73xpYJJ/ndtk0G5Zk.js","#framer/local/collection/rp_HLcMwk/rp_HLcMwk.js":"https://framerusercontent.com/modules/ljWjmvk1cXChrG3Hqvnp/894BlYxbPC9oDqqPsGKU/rp_HLcMwk.js","#framer/local/collection/usM6z49fk/usM6z49fk.js":"https://framerusercontent.com/modules/nh9cCcdgSfDBw2ZW48Pp/xP3vnE6Og8q1VTSmeZ6Z/usM6z49fk.js","#framer/local/collection/wORPykON0/wORPykON0.js":"https://framerusercontent.com/modules/1yxRUCqZe3akUbBJGvVO/X1QRsqIk5VwtcByng626/wORPykON0.js","#framer/local/collection/wZ3_1jVMX/wZ3_1jVMX.js":"https://framerusercontent.com/modules/qbLnwuAXJwTMfcconVOg/BfFCwGVRitoL3XGvyLlQ/wZ3_1jVMX.js","#framer/local/componentPresets/componentPresets/componentPresets.js":"https://framerusercontent.com/modules/eIK5uj2sVW7UnzuL5lfi/8MgRMIEY31vuYqraWdTj/componentPresets.js","#framer/local/css/acYyomPU0/acYyomPU0.js":"https://framerusercontent.com/modules/cG6JKl7YOiZO3X6dhqE8/YndLuunCJzS0FehPLqIF/acYyomPU0.js","#framer/local/css/as1gz0hGI/as1gz0hGI.js":"https://framerusercontent.com/modules/8I5XDMtdzq9jvlZmv0Zz/caIlDGAvZSl8YCg36Cpf/as1gz0hGI.js","#framer/local/css/bgWDtDYJY/bgWDtDYJY.js":"https://framerusercontent.com/modules/6G0Ea8dFBT1sketEUVcF/AnrMZFHvW2VPLuhhqDcA/bgWDtDYJY.js","#framer/local/css/CAYDUQMeY/CAYDUQMeY.js":"https://framerusercontent.com/modules/ar2MSwKI1kQb7iqCnO5D/9KmO6pjH2ZReYB8G6pnf/CAYDUQMeY.js","#framer/local/css/d1xGMUKv0/d1xGMUKv0.js":"https://framerusercontent.com/modules/5pAZmOc2VlEwRQJalnU0/m7loGx3urq7Do8Si1G9n/d1xGMUKv0.js","#framer/local/css/fuCBOACzd/fuCBOACzd.js":"https://framerusercontent.com/modules/3kG3YVk1huB8sigTsjc2/ahgDwCEy0dWFP6DwSWLX/fuCBOACzd.js","#framer/local/css/gWWtKHKQk/gWWtKHKQk.js":"https://framerusercontent.com/modules/1kkfAxEeQLBePungs0At/NvNfd9ef6dwoTKF1bhA3/gWWtKHKQk.js","#framer/local/css/jQVe6kYQM/jQVe6kYQM.js":"https://framerusercontent.com/modules/kYzns5fsAMf5waTJjJch/4gWMjI6N4uVZ3z9FKB4U/jQVe6kYQM.js","#framer/local/css/MfsRQEeNR/MfsRQEeNR.js":"https://framerusercontent.com/modules/aH6SbyLcMPH4KEGuHOFk/X9ZSAmShafLN0jgQa74o/MfsRQEeNR.js","#framer/local/css/NFQgmEKNS/NFQgmEKNS.js":"https://framerusercontent.com/modules/qpVC2Qs24FiyzDEQf9Mu/UHoQ6OPhMObIdjUO5Prr/NFQgmEKNS.js","#framer/local/css/o56lyMtVV/o56lyMtVV.js":"https://framerusercontent.com/modules/cboQ3z2d9pxzhziGrxxz/2o9BisNE2X9fFqAiW31b/o56lyMtVV.js","#framer/local/css/OmX7I5ajb/OmX7I5ajb.js":"https://framerusercontent.com/modules/hwCQVaUrmVJjMQ8sxWDo/7ENmvysQFI8gCeu715Po/OmX7I5ajb.js","#framer/local/css/OtUrm9bIy/OtUrm9bIy.js":"https://framerusercontent.com/modules/aVlPi7t7zvJKXR5Y7tp8/8W9Jng6Ue1xK9LgtwJC7/OtUrm9bIy.js","#framer/local/css/pVFYssufe/pVFYssufe.js":"https://framerusercontent.com/modules/jzDfMdZPkDIMcz3yeCe5/jVISWmtaXlQ8CtCEVVh6/pVFYssufe.js","#framer/local/css/QdoOkbnLy/QdoOkbnLy.js":"https://framerusercontent.com/modules/elp2S0Wg5ktb2hdff60F/cSHVOp2aXuifUTaC0ZSZ/QdoOkbnLy.js","#framer/local/css/qkabgIavP/qkabgIavP.js":"https://framerusercontent.com/modules/wFprZWVnvvK8gWKEFsJ5/jQlnsQh72iaWMEUVTsKG/qkabgIavP.js","#framer/local/css/ujIvcGG5g/ujIvcGG5g.js":"https://framerusercontent.com/modules/2WVJBG1QyPqoh7TI6bL4/urXo86bOOJ8C9ymoOmUa/ujIvcGG5g.js","#framer/local/css/UkyGI23JW/UkyGI23JW.js":"https://framerusercontent.com/modules/vAIIWF7V8DyqxFA41yOY/XnqxLAUDrkJCT7p8u66P/UkyGI23JW.js","#framer/local/css/VJolMkNkU/VJolMkNkU.js":"https://framerusercontent.com/modules/gT0qDi5sP9ke0rlWG3ur/WAQpRmW1QQNrtqWxee16/VJolMkNkU.js","#framer/local/css/vQLaqmd45/vQLaqmd45.js":"https://framerusercontent.com/modules/tkcoOE7thd9CAyqI0gFy/MnitV5smkfbtIpb8bk8j/vQLaqmd45.js","#framer/local/css/W3HhBXXsK/W3HhBXXsK.js":"https://framerusercontent.com/modules/8MtUPq7sRAH3XJwJ935d/KHe6T80y12q1EnUQjk5L/W3HhBXXsK.js","#framer/local/css/wtBhWm9DS/wtBhWm9DS.js":"https://framerusercontent.com/modules/xkfdfiqHQiRfCBcvuPwz/fucK07rb7UKhdlB89yjc/wtBhWm9DS.js","#framer/local/css/WZOfYu0Cx/WZOfYu0Cx.js":"https://framerusercontent.com/modules/3QHxRufc6q0E9EkiswM2/BriPTV9dwSj2z6uqCC1S/WZOfYu0Cx.js","#framer/local/css/x39OeXlCQ/x39OeXlCQ.js":"https://framerusercontent.com/modules/vystNk6XZ5xnoXuFrKzE/J5UbNXfcbDYPWVZrjSsc/x39OeXlCQ.js","#framer/local/css/X_4xF9UxH/X_4xF9UxH.js":"https://framerusercontent.com/modules/hqrkhpfOO7zBfe7JwUgB/4zVZaFYmbI3eJjO78NY1/X_4xF9UxH.js","#framer/local/css/y4ybZTMSu/y4ybZTMSu.js":"https://framerusercontent.com/modules/wbigRz97gFS73QaFGAUo/v0NOAae3S7WbbyRdnnUK/y4ybZTMSu.js","#framer/local/css/Z6GtKq3Tk/Z6GtKq3Tk.js":"https://framerusercontent.com/modules/mwd523r911AquKECqRdP/7nT9Uj5mIQlq98zEvLtf/Z6GtKq3Tk.js","#framer/local/css/Zd7zV0dhj/Zd7zV0dhj.js":"https://framerusercontent.com/modules/cPrXpEaGZ8JUBGn7uNYT/eKuPv2i9KxEcbg2KrHKu/Zd7zV0dhj.js","#framer/local/screen/augiA20Il/augiA20Il.js":"https://framerusercontent.com/modules/3v1oLNC5ypbs08upWwU8/15i89dH3eoyxz25FrGWY/augiA20Il.js","#framer/local/screen/C2p4XGnq8/C2p4XGnq8.js":"https://framerusercontent.com/modules/q8L8LsMUAYVMjovHjh6z/WL0DvAwCNrxg5p1ouTTf/C2p4XGnq8.js","#framer/local/screen/d7651_nD0/d7651_nD0.js":"https://framerusercontent.com/modules/yOv4TqDblYeRLgDyGwzb/Shv7Maf5jn9C1EnxlW34/d7651_nD0.js","#framer/local/screen/dfxngF2Yb/dfxngF2Yb.js":"https://framerusercontent.com/modules/dMD2JyDakNjcF9BLtAoh/SRKxzrjskpCcYoMrEIIP/dfxngF2Yb.js","#framer/local/screen/dKIKws2Gw/dKIKws2Gw.js":"https://framerusercontent.com/modules/l2SJg7D7XGOjkdESqtzz/yd91dHIH9qTwPDuhxbip/dKIKws2Gw.js","#framer/local/screen/DphiVM7uj/DphiVM7uj.js":"https://framerusercontent.com/modules/1X12L4v5XueQp15qkUnU/WG8qVortqZlcMK5pOc1G/DphiVM7uj.js","#framer/local/screen/e6mQKpGBW/e6mQKpGBW.js":"https://framerusercontent.com/modules/jtezbHEUZWiTIqDXMcs5/f1Bkf9kwVlIZbYufelcZ/e6mQKpGBW.js","#framer/local/screen/eABf7h_oC/eABf7h_oC.js":"https://framerusercontent.com/modules/r88qPJ5aT3idi3XKwUT4/w1k72zgoAY3OXemaXvyZ/eABf7h_oC.js","#framer/local/screen/eQHXJCr2p/eQHXJCr2p.js":"https://framerusercontent.com/modules/3Rpq3zCqHEW3Qo25qNUq/t9AEiwAgENPQwK6hMPoh/eQHXJCr2p.js","#framer/local/screen/gUhDH3fwq/gUhDH3fwq.js":"https://framerusercontent.com/modules/ujgnBDUdZtwjqH9331vP/meNMYh8cryJuT2Wvblxx/gUhDH3fwq.js","#framer/local/screen/hY8ZdA4z7/hY8ZdA4z7.js":"https://framerusercontent.com/modules/8jBNt7ArKTJDZmopLMew/eey0HieXRlJZJyMnm7Sd/hY8ZdA4z7.js","#framer/local/screen/ijni_C4iJ/ijni_C4iJ.js":"https://framerusercontent.com/modules/nLGrd6E9Kgo6LhNR8gvh/ISUH73FusFTqcumgBEgh/ijni_C4iJ.js","#framer/local/screen/JueDHy6LK/JueDHy6LK.js":"https://framerusercontent.com/modules/it9UzwjUafc4MzlHOQDf/FCRJxUN80ZTpT5fePHlJ/JueDHy6LK.js","#framer/local/screen/L1nRX4vmT/L1nRX4vmT.js":"https://framerusercontent.com/modules/eLHFBmlVvw58XSRxJkPu/MLciiU78oVTvhpyV6nio/L1nRX4vmT.js","#framer/local/screen/lpbLGdUjj/lpbLGdUjj.js":"https://framerusercontent.com/modules/8qgvHFKyVnxkaN2o8lH5/XeZQ8xwksnhLN0QNv1fW/lpbLGdUjj.js","#framer/local/screen/Ny71kHUA_/Ny71kHUA_.js":"https://framerusercontent.com/modules/dNFOljx6lmqrsuDIbLdA/JpTsJfJwlng0rt1X4Kr9/Ny71kHUA_.js","#framer/local/screen/odrwKYNPV/odrwKYNPV.js":"https://framerusercontent.com/modules/9HWoxpcnpVWcBeXitWmk/G1ki0qrO6q17L0txWsSj/odrwKYNPV.js","#framer/local/screen/ojyMdeaZW/ojyMdeaZW.js":"https://framerusercontent.com/modules/mZcf0VqTF9E4pChgIJkW/LhoQQFPTMzuXjFtGHy5M/ojyMdeaZW.js","#framer/local/screen/PwsT6iG3V/PwsT6iG3V.js":"https://framerusercontent.com/modules/xX8OADnxLrUzWWer55EI/v07dOxl5Xdn5lOPEnDw7/PwsT6iG3V.js","#framer/local/screen/qETGKpU98/qETGKpU98.js":"https://framerusercontent.com/modules/hwthx04MtruF8FElhKst/XDClsbZJtzEyzc2Hq9tC/qETGKpU98.js","#framer/local/screen/rwTs00lRW/rwTs00lRW.js":"https://framerusercontent.com/modules/yz8VyZLgPcmJ6ZUXA0Lh/7dpxCT1LXvqBB61i5Jyc/rwTs00lRW.js","#framer/local/screen/sa92Xh1jb/sa92Xh1jb.js":"https://framerusercontent.com/modules/2PTrG2y2RIG7C567w96w/1m8HWBzcrMZUJCFyzYK5/sa92Xh1jb.js","#framer/local/screen/TgdmeyfNP/TgdmeyfNP.js":"https://framerusercontent.com/modules/aaOsDQoK3H2qiivZKYZ2/Hy8aWMYRcDcbTr4GliPk/TgdmeyfNP.js","#framer/local/screen/Tv4QXyWjw/Tv4QXyWjw.js":"https://framerusercontent.com/modules/e1il05Cm2A0ZEq5GfvoA/SIL3XtYdjNLPflrRMJuX/Tv4QXyWjw.js","#framer/local/screen/uJRJ0stuM/uJRJ0stuM.js":"https://framerusercontent.com/modules/zK3CWWywZnIKSitVCL0o/1mh1vqLhEjUneDcWoyEL/uJRJ0stuM.js","#framer/local/screen/vgtR5nrnx/vgtR5nrnx.js":"https://framerusercontent.com/modules/w5dKc8ZCGsVRKZdSKwJv/UKvsFMzDVz7vLkLpiXir/vgtR5nrnx.js","#framer/local/screen/wOqBdAOll/wOqBdAOll.js":"https://framerusercontent.com/modules/wjN7iHYcT6KiprA1rvFN/fW7M6Yrzx0m0tTbT14lm/wOqBdAOll.js","#framer/local/screen/xxOBG8e2O/xxOBG8e2O.js":"https://framerusercontent.com/modules/ySqp0pvmUqwpmdSXApZd/Jj8A0EB4NgQzwVWYgtVg/xxOBG8e2O.js","#framer/local/screen/z5F9Q1U_M/z5F9Q1U_M.js":"https://framerusercontent.com/modules/mCOEU47WTXwMuY3aIxOX/37ICwSr7fExEh9IoTFtu/z5F9Q1U_M.js","#framer/local/siteMetadata/siteMetadata/siteMetadata.js":"https://framerusercontent.com/modules/tnAPNybG4vZbrHvDxEds/GMbdq8idXb3uEH0azrL0/siteMetadata.js","#framer/local/webPageMetadata/augiA20Il/augiA20Il.js":"https://framerusercontent.com/modules/ueQcGduGvWpiET0ovXbQ/cyJDAHhnfJ3zaQ6eqLR9/augiA20Il.js","#framer/local/webPageMetadata/dfxngF2Yb/dfxngF2Yb.js":"https://framerusercontent.com/modules/9xbYrYQFynN8xGZBgy8y/18ehSoi7PB34gRJGysD0/dfxngF2Yb.js","#framer/local/webPageMetadata/C2p4XGnq8/C2p4XGnq8.js":"https://framerusercontent.com/modules/eubBCJDRVULoxPNur9kA/fWCDD1Lyc5UM8o05OgcM/C2p4XGnq8.js","#framer/local/webPageMetadata/d7651_nD0/d7651_nD0.js":"https://framerusercontent.com/modules/x91O2tkmfMA76GEq0uf9/AXuezVZyjABllac7wmxp/d7651_nD0.js","#framer/local/webPageMetadata/dKIKws2Gw/dKIKws2Gw.js":"https://framerusercontent.com/modules/mXmNCHPwsSq6oz0UcIQY/R79IR8KEqLbLaHwScjBX/dKIKws2Gw.js","#framer/local/webPageMetadata/e6mQKpGBW/e6mQKpGBW.js":"https://framerusercontent.com/modules/6EJQB6ksnB5P9fSGCncA/caE29OEkEOGUorAwD7rW/e6mQKpGBW.js","#framer/local/webPageMetadata/DphiVM7uj/DphiVM7uj.js":"https://framerusercontent.com/modules/lEw8phuCI7xWR4K0vXTy/hMRtE1rcnTvvJgeH1oNF/DphiVM7uj.js","#framer/local/webPageMetadata/eABf7h_oC/eABf7h_oC.js":"https://framerusercontent.com/modules/uoOOENlnXf83Xfcfegro/cWn2ZGmh3IvfuW7F5E4N/eABf7h_oC.js","#framer/local/webPageMetadata/eQHXJCr2p/eQHXJCr2p.js":"https://framerusercontent.com/modules/l6HcakHNobRLvVQlFOv2/PbIIFxPvy0OyxbhuBhTB/eQHXJCr2p.js","#framer/local/webPageMetadata/gUhDH3fwq/gUhDH3fwq.js":"https://framerusercontent.com/modules/6OW63zy9eBvqmi6KLneN/jBNhTRbSSibqXB5M8pZp/gUhDH3fwq.js","#framer/local/webPageMetadata/hY8ZdA4z7/hY8ZdA4z7.js":"https://framerusercontent.com/modules/DGnMPtZ27GmpMYqSfk1g/FZnx6RrcJ2M4LUirhfp0/hY8ZdA4z7.js","#framer/local/webPageMetadata/JueDHy6LK/JueDHy6LK.js":"https://framerusercontent.com/modules/sgt4QcVKk9spnOBjqJBh/QK6xqj3xl4WJWEtEMIgk/JueDHy6LK.js","#framer/local/webPageMetadata/L1nRX4vmT/L1nRX4vmT.js":"https://framerusercontent.com/modules/trLSCrwcT8CGVjt6pCsJ/hMyCldEVPMjAbFVsH0A8/L1nRX4vmT.js","#framer/local/webPageMetadata/ijni_C4iJ/ijni_C4iJ.js":"https://framerusercontent.com/modules/g2Y3EdipnUl3na42l2Sv/doeWBEBg888ip3WgRqpq/ijni_C4iJ.js","#framer/local/webPageMetadata/lpbLGdUjj/lpbLGdUjj.js":"https://framerusercontent.com/modules/65OBAGRIA1zKyCeNIS3s/bEBugeaEYJQwKTx3ITk1/lpbLGdUjj.js","#framer/local/webPageMetadata/Ny71kHUA_/Ny71kHUA_.js":"https://framerusercontent.com/modules/tyE9sSgC7mBG7WuryC2Z/HgEBfwS6IUNqXIgtg7my/Ny71kHUA_.js","#framer/local/webPageMetadata/odrwKYNPV/odrwKYNPV.js":"https://framerusercontent.com/modules/8ccvrReqyZXnhcpOHpJA/O5ElptTCkHWgw2ICFlzQ/odrwKYNPV.js","#framer/local/webPageMetadata/ojyMdeaZW/ojyMdeaZW.js":"https://framerusercontent.com/modules/jDjFEAtYr7H7D3aavVI3/3O52O5I4bZBKuzC2grF1/ojyMdeaZW.js","#framer/local/webPageMetadata/PwsT6iG3V/PwsT6iG3V.js":"https://framerusercontent.com/modules/mxhg3UXYTH7sicl0OUrQ/Ni2HlwVK6Q5nRSxPPbPm/PwsT6iG3V.js","#framer/local/webPageMetadata/qETGKpU98/qETGKpU98.js":"https://framerusercontent.com/modules/164eW9sbBpqqJlbOCaqc/qOeadVPjdgPNRUR5YAvu/qETGKpU98.js","#framer/local/webPageMetadata/rwTs00lRW/rwTs00lRW.js":"https://framerusercontent.com/modules/yBJA4c4rN3sG9or66Lt4/ILwrr29xbFS7oLdp2MgJ/rwTs00lRW.js","#framer/local/webPageMetadata/TgdmeyfNP/TgdmeyfNP.js":"https://framerusercontent.com/modules/hRQfnMEE3eWODMa5JA3T/BTCFUAdxCA2rrAyxYEeO/TgdmeyfNP.js","#framer/local/webPageMetadata/uJRJ0stuM/uJRJ0stuM.js":"https://framerusercontent.com/modules/mjrlLq2grMfRY9VIjRB9/ebIP5JGuqSfJYutrMeh0/uJRJ0stuM.js","#framer/local/webPageMetadata/vgtR5nrnx/vgtR5nrnx.js":"https://framerusercontent.com/modules/udTvga5WW8I9shK2qdwH/IHbsWb9h8vqsPa7ylzqS/vgtR5nrnx.js","#framer/local/webPageMetadata/sa92Xh1jb/sa92Xh1jb.js":"https://framerusercontent.com/modules/lA4YnyX1VFrsWRGKQHn2/W2WR0ntL7w8ZzaMuPbwn/sa92Xh1jb.js","#framer/local/webPageMetadata/Tv4QXyWjw/Tv4QXyWjw.js":"https://framerusercontent.com/modules/umsTkTxMI8aVzJXc6ySh/N1TscfJlOAceWEGokTsx/Tv4QXyWjw.js","#framer/local/webPageMetadata/wOqBdAOll/wOqBdAOll.js":"https://framerusercontent.com/modules/vWp0j9fPvGikiCA0wlJx/m0BANGYEbuefulGULq8W/wOqBdAOll.js","#framer/local/webPageMetadata/xxOBG8e2O/xxOBG8e2O.js":"https://framerusercontent.com/modules/eR9oocM3BF9DYne9jCQs/APMnmgG42piKEVmhdeoj/xxOBG8e2O.js","#framer/local/webPageMetadata/z5F9Q1U_M/z5F9Q1U_M.js":"https://framerusercontent.com/modules/5GZ1OhObx3tFkPlOjCky/9Yy7Jgbz4fGx4zTRv2rS/z5F9Q1U_M.js","#framer/local/codeFile/SwPsRxD/Examples.js":"https://framerusercontent.com/modules/slYWogCYsCnQM9bsnn4e/HEvtThyPUIAdEhHPxCrw/Examples.js","framer":"https://app.framerstatic.com/framer.F7PBHTL4.mjs","framer-motion":"https://app.framerstatic.com/framer-motion.6K3CE3GN.mjs","react":"https://ga.jspm.io/npm:react@18.2.0/index.js","react-dom":"https://ga.jspm.io/npm:react-dom@18.2.0/index.js","react-dom/client":"https://ga.jspm.io/npm:react-dom@18.2.0/client.js","react-dom/server":"https://ga.jspm.io/npm:react-dom@18.2.0/server.browser.js","react/jsx-runtime":"https://ga.jspm.io/npm:react@18.2.0/jsx-runtime.js"},"scopes":{"https://ga.jspm.io/":{"@babel/runtime/helpers/esm/defineProperty":"https://ga.jspm.io/npm:@babel/runtime@7.16.7/helpers/esm/defineProperty.js","@babel/runtime/helpers/esm/extends":"https://ga.jspm.io/npm:@babel/runtime@7.16.7/helpers/esm/extends.js","@chevrotain/utils":"https://ga.jspm.io/npm:@chevrotain/utils@9.1.0/lib/src/api.js","@motionone/animation":"https://ga.jspm.io/npm:@motionone/animation@10.12.0/dist/index.es.js","@motionone/easing":"https://ga.jspm.io/npm:@motionone/easing@10.12.0/dist/index.es.js","@motionone/generators":"https://ga.jspm.io/npm:@motionone/generators@10.12.0/dist/index.es.js","@motionone/types":"https://ga.jspm.io/npm:@motionone/types@10.12.0/dist/index.es.js","@react-spring/animated":"https://ga.jspm.io/npm:@react-spring/animated@9.4.1/dist/react-spring-animated.esm.js","@react-spring/core":"https://ga.jspm.io/npm:@react-spring/core@9.4.1/dist/react-spring-core.esm.js","@react-spring/rafz":"https://ga.jspm.io/npm:@react-spring/rafz@9.4.1/dist/react-spring-rafz.esm.js","@react-spring/shared":"https://ga.jspm.io/npm:@react-spring/shared@9.4.1/dist/react-spring-shared.esm.js","@react-spring/three":"https://ga.jspm.io/npm:@react-spring/three@9.4.1/dist/react-spring-three.esm.js","@react-spring/types/animated":"https://ga.jspm.io/npm:@react-spring/types@9.4.1/animated.js","@react-spring/types/interpolation":"https://ga.jspm.io/npm:@react-spring/types@9.4.1/interpolation.js","@use-gesture/core":"https://ga.jspm.io/npm:@use-gesture/core@10.2.4/dist/use-gesture-core.esm.js","@use-gesture/core/actions":"https://ga.jspm.io/npm:@use-gesture/core@10.2.4/actions/dist/use-gesture-core-actions.esm.js","@use-gesture/core/types":"https://ga.jspm.io/npm:@use-gesture/core@10.2.4/types/dist/use-gesture-core-types.esm.js","@use-gesture/core/utils":"https://ga.jspm.io/npm:@use-gesture/core@10.2.4/utils/dist/use-gesture-core-utils.esm.js","@use-gesture/react":"https://ga.jspm.io/npm:@use-gesture/react@10.2.4/dist/use-gesture-react.esm.js","abort-controller":"https://ga.jspm.io/npm:abort-controller@3.0.0/browser.js","abortcontroller-polyfill/dist/cjs-ponyfill":"https://ga.jspm.io/npm:abortcontroller-polyfill@1.7.3/dist/cjs-ponyfill.js","bidi-js":"https://ga.jspm.io/npm:bidi-js@1.0.2/dist/bidi.js","buffer":"https://ga.jspm.io/npm:@jspm/core@2.0.0-beta.14/nodelibs/browser/buffer.js","chevrotain":"https://ga.jspm.io/npm:chevrotain@9.1.0/lib_esm/api_esm.mjs","debounce":"https://ga.jspm.io/npm:debounce@1.2.1/index.js","detect-gpu":"https://ga.jspm.io/npm:detect-gpu@3.1.30/dist/detect-gpu.esm.js","fast-deep-equal":"https://ga.jspm.io/npm:fast-deep-equal@3.1.3/index.js","fflate":"https://ga.jspm.io/npm:fflate@0.6.10/esm/browser.js","framesync":"https://ga.jspm.io/npm:framesync@6.0.1/dist/es/index.mjs","hey-listen":"https://ga.jspm.io/npm:hey-listen@1.0.8/dist/index.js","ktx-parse":"https://ga.jspm.io/npm:ktx-parse@0.2.2/dist/ktx-parse.modern.js","lodash.omit":"https://ga.jspm.io/npm:lodash.omit@4.5.0/index.js","lodash.pick":"https://ga.jspm.io/npm:lodash.pick@4.4.0/index.js","lodash/get":"https://ga.jspm.io/npm:lodash@4.17.21/get.js","lodash/isArray":"https://ga.jspm.io/npm:lodash@4.17.21/isArray.js","lodash/isFunction":"https://ga.jspm.io/npm:lodash@4.17.21/isFunction.js","lodash/isNil":"https://ga.jspm.io/npm:lodash@4.17.21/isNil.js","lodash/isNumber":"https://ga.jspm.io/npm:lodash@4.17.21/isNumber.js","lodash/isPlainObject":"https://ga.jspm.io/npm:lodash@4.17.21/isPlainObject.js","lodash/isString":"https://ga.jspm.io/npm:lodash@4.17.21/isString.js","lodash/keys":"https://ga.jspm.io/npm:lodash@4.17.21/keys.js","mmd-parser":"https://ga.jspm.io/npm:mmd-parser@1.0.4/build/mmdparser.js","node-fetch":"https://ga.jspm.io/npm:node-fetch@2.6.7/browser.js","object-assign":"https://ga.jspm.io/npm:object-assign@4.1.1/index.js","opentype.js":"https://ga.jspm.io/npm:opentype.js@1.3.4/dist/opentype.module.js","potpack":"https://ga.jspm.io/npm:potpack@1.0.2/index.mjs","process":"https://framer.com/m/framer/empty.js@0.1.0","prop-types":"https://ga.jspm.io/npm:prop-types@15.8.0/index.js","proxy-compare":"https://ga.jspm.io/npm:proxy-compare@2.0.2/dist/index.modern.js","react-composer":"https://ga.jspm.io/npm:react-composer@5.0.2/es/index.js","react-merge-refs":"https://ga.jspm.io/npm:react-merge-refs@1.1.0/dist/react-merge-refs.esm.js","react-reconciler":"https://ga.jspm.io/npm:react-reconciler@0.26.2/index.js","react-use-measure":"https://ga.jspm.io/npm:react-use-measure@2.1.1/dist/web.js","regexp-to-ast":"https://ga.jspm.io/npm:regexp-to-ast@0.5.0/lib/regexp-to-ast.js","scheduler":"https://ga.jspm.io/npm:scheduler@0.23.0/index.js","style-value-types":"https://ga.jspm.io/npm:style-value-types@5.0.0/dist/es/index.mjs","three-mesh-bvh":"https://ga.jspm.io/npm:three-mesh-bvh@0.5.3/src/index.js","three-stdlib":"https://ga.jspm.io/npm:three-stdlib@2.6.4/index.js","three/examples/js/libs/stats.min":"https://ga.jspm.io/npm:three@0.136.0/examples/js/libs/stats.min.js","troika-three-text":"https://ga.jspm.io/npm:troika-three-text@0.44.0/dist/troika-three-text.esm.js","troika-three-utils":"https://ga.jspm.io/npm:troika-three-utils@0.44.0/dist/troika-three-utils.esm.js","troika-worker-utils":"https://ga.jspm.io/npm:troika-worker-utils@0.44.0/dist/troika-worker-utils.esm.js","tslib":"https://ga.jspm.io/npm:tslib@2.4.0/tslib.es6.js","use-asset":"https://ga.jspm.io/npm:use-asset@1.0.4/dist/index.cjs.js","valtio/vanilla":"https://ga.jspm.io/npm:valtio@1.2.9/esm/vanilla.js","zstddec":"https://ga.jspm.io/npm:zstddec@0.0.2/dist/zstddec.js","zustand":"https://ga.jspm.io/npm:zustand@3.6.8/esm/index.js","popmotion":"https://ga.jspm.io/npm:popmotion@11.0.3/dist/es/index.mjs","@motionone/utils":"https://ga.jspm.io/npm:@motionone/utils@10.14.0/dist/index.es.js","fs":"https://framer.com/m/framer/empty.js@0.1.0"},"https://ga.jspm.io/npm:framer-motion-3d@6.0.0-beta.8/":{"tslib":"https://ga.jspm.io/npm:tslib@2.3.1/tslib.es6.js"}}}</script>
    <script async src="https://ga.jspm.io/npm:es-module-shims@1.6.3/dist/es-module-shims.js" crossorigin="anonymous" data-framer-es-module-shims></script>
    <script>try{if(localStorage.get("__framer_force_showing_editorbar_since")){const n=document.createElement("link");n.rel = "modulepreload";n.href="https://framer.com/edit/init.mjs";document.head.appendChild(n)}}catch(e){}</script>
    <!-- Start of headStart -->
    
    <!-- End of headStart -->
    <meta name="viewport" content="width=device-width">
    <meta name="generator" content="Framer 569b461">
    <title>Biobricks - Personal Portfolio Website</title>
    <meta name="description" content="Framer Template for Personal Portfolio Website" />
    <meta name="framer-search-index" content="https://framerusercontent.com/sites/6EeUsjU9VXy5gqAHgxrHrF/searchIndex-64NTdbC26ewP.json">
    <link href="https://framerusercontent.com/images/oyBoKc3cNZXrgrcxHU43zaAcos.png" rel="icon" media="(prefers-color-scheme: light)">
    <link href="https://framerusercontent.com/images/oyBoKc3cNZXrgrcxHU43zaAcos.png" rel="icon" media="(prefers-color-scheme: dark)">
    <link rel="apple-touch-icon" href="https://framerusercontent.com/images/xGRl1xfFKzLzDbOMIXZluROchC8.png"/>
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="Biobricks - Personal Portfolio Website">
    <meta property="og:description" content="Framer Template for Personal Portfolio Website">
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Biobricks - Personal Portfolio Website">
    <meta name="twitter:description" content="Framer Template for Personal Portfolio Website">
    <style data-framer-css-ssr>
        html, body, #main {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :root {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        * {
            box-sizing: border-box;
            -webkit-font-smoothing: inherit;
        }
        h1, h2, h3, h4, h5, h6, p, figure {
            margin: 0;
        }
        body, input, textarea, select, button { font-size: 12px; font-family: sans-serif; }
        body { --token-5253654b-ec08-4732-918a-ddd1c86d8467: rgb(0, 0, 0);--token-e81c60f0-9006-42e6-b34a-0c062c37bd1a: rgb(17, 24, 39);--token-176b90fc-dce2-4444-b0b5-e69e80909050: rgb(75, 85, 99);--token-3657d5b9-c730-45e4-a612-aa2694087e53: rgb(107, 114, 128);--token-2ca8a083-d615-4a72-959e-9decc8ed3308: rgb(229, 231, 235);--token-dbe12846-630f-40d9-be62-da93da422bb6: rgba(0, 0, 0, 0.05);--token-42cbca23-5361-4772-827d-b6e3458d79e7: rgba(0, 0, 0, 0.03);--token-ab2eba28-181e-4912-946f-7408b0746961: rgb(250, 250, 250);--token-29c1a320-cdc0-4d5e-a54f-37299311641d: rgb(255, 255, 255);--token-ebc960c9-7dc2-4828-bac3-32e3e7ffa6b3: rgb(31, 181, 20);--token-44ea388f-a27b-45ae-bb11-c1d194d7ebde: rgba(0, 0, 0, 0);--token-8117f610-c3aa-42ca-a6a3-7b232ed16055: rgba(255, 255, 255, 0.03);--token-43fb5e55-966e-4075-9b46-f4f5915f2e93: rgba(255, 255, 255, 0.05);--token-0b1caf4c-b620-4ec2-b35a-7f40668a58ae: rgba(17, 24, 39, 0.6);--token-fce5c98d-928f-4dee-9e0f-7aaa1b813222: rgba(17, 24, 39, 0.3);--token-196d8639-5e47-4f10-9fa4-31e7dc3f279f: rgba(250, 250, 250, 0.1); @supports (color: color(display-p3 1 1 1)) {  } }
@media (prefers-color-scheme: dark) { body {  @supports (color: color(display-p3 1 1 1)) {  } } }
        
        @supports (z-index: calc(infinity)) {
            #__framer-badge-container {
                --infinity: infinity;
            }
        }

        #__framer-badge-container {
            position: fixed;
            bottom: 0;
            padding: 20px;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            pointer-events: none;
            z-index: calc(var(--infinity, 2147483647));
        }
        
    </style>
    <style data-framer-font-css>/* cyrillic-ext */
@font-face {
  font-family: 'Fragment Mono';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnB45HhrUI.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* latin-ext */
@font-face {
  font-family: 'Fragment Mono';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnB41HhrUI.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Fragment Mono';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnB4NHhg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2"); font-display: swap; font-style: normal; font-weight: 400; unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2"); font-display: swap; font-style: normal; font-weight: 400; unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116 }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2"); font-display: swap; font-style: normal; font-weight: 400; unicode-range: U+1F00-1FFF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2"); font-display: swap; font-style: normal; font-weight: 400; unicode-range: U+0370-03FF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2"); font-display: swap; font-style: normal; font-weight: 400; unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2"); font-display: swap; font-style: normal; font-weight: 400; unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2"); font-display: swap; font-style: normal; font-weight: 400; unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2"); font-display: swap; font-style: normal; font-weight: 400; unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2"); font-display: swap; font-style: normal; font-weight: 700; unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2"); font-display: swap; font-style: normal; font-weight: 700; unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116 }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2"); font-display: swap; font-style: normal; font-weight: 700; unicode-range: U+1F00-1FFF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2"); font-display: swap; font-style: normal; font-weight: 700; unicode-range: U+0370-03FF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2"); font-display: swap; font-style: normal; font-weight: 700; unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2"); font-display: swap; font-style: normal; font-weight: 700; unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2"); font-display: swap; font-style: normal; font-weight: 700; unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2"); font-display: swap; font-style: italic; font-weight: 700; unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2"); font-display: swap; font-style: italic; font-weight: 700; unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116 }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2"); font-display: swap; font-style: italic; font-weight: 700; unicode-range: U+1F00-1FFF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2"); font-display: swap; font-style: italic; font-weight: 700; unicode-range: U+0370-03FF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2"); font-display: swap; font-style: italic; font-weight: 700; unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2"); font-display: swap; font-style: italic; font-weight: 700; unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2"); font-display: swap; font-style: italic; font-weight: 700; unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2"); font-display: swap; font-style: italic; font-weight: 400; unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2"); font-display: swap; font-style: italic; font-weight: 400; unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116 }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2"); font-display: swap; font-style: italic; font-weight: 400; unicode-range: U+1F00-1FFF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2"); font-display: swap; font-style: italic; font-weight: 400; unicode-range: U+0370-03FF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2"); font-display: swap; font-style: italic; font-weight: 400; unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2"); font-display: swap; font-style: italic; font-weight: 400; unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2"); font-display: swap; font-style: italic; font-weight: 400; unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2"); font-display: swap; font-style: normal; font-weight: 500; unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2"); font-display: swap; font-style: normal; font-weight: 500; unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116 }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2"); font-display: swap; font-style: normal; font-weight: 500; unicode-range: U+1F00-1FFF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2"); font-display: swap; font-style: normal; font-weight: 500; unicode-range: U+0370-03FF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2"); font-display: swap; font-style: normal; font-weight: 500; unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2"); font-display: swap; font-style: normal; font-weight: 500; unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2"); font-display: swap; font-style: normal; font-weight: 500; unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/khkJkwSL66WFg8SX6Wa726c.woff2"); font-display: swap; font-style: italic; font-weight: 500; unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/0E7IMbDzcGABpBwwqNEt60wU0w.woff2"); font-display: swap; font-style: italic; font-weight: 500; unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116 }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2"); font-display: swap; font-style: italic; font-weight: 500; unicode-range: U+1F00-1FFF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2"); font-display: swap; font-style: italic; font-weight: 500; unicode-range: U+0370-03FF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/JEXmejW8mXOYMtt0hyRg811kHac.woff2"); font-display: swap; font-style: italic; font-weight: 500; unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/ksvR4VsLksjpSwnC2fPgHRNMw.woff2"); font-display: swap; font-style: italic; font-weight: 500; unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD }
@font-face { font-family: "Inter"; src: url("https://framerusercontent.com/assets/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2"); font-display: swap; font-style: italic; font-weight: 500; unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB }
@font-face { font-family: "Inter Placeholder"; src: local("Arial"); ascent-override: 89.79%; descent-override: 22.36%; line-gap-override: 0.00%; size-adjust: 107.89% }</style>
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
    <!-- Start of headEnd -->
    
    <!-- End of headEnd -->
</head>
<body>
    <script async src="https://events.framer.com/script?v=2" data-fid="2d4b80dda15d89e7584db3d6526356d5184087faf31e8eef415bf56424bc234f" data-no-nt></script>
    <!-- Start of bodyStart -->
    
    <!-- End of bodyStart -->
    <script data-relative-date-script="global">!function(){var l=new Map;function R(t,e,n){let r=[n,{numeric:e,style:t}],o=JSON.stringify(r),s=l.get(o);if(s)return s;let i=new Intl.RelativeTimeFormat(...r);return l.set(o,i),i}function g(t,e,n,a,r,o,s){let i=M(t,e,n),h=x(t,e,i),c=R(a,r,s).format(h,i);return o?d(c):c}function d(t){return t.charAt(0).toUpperCase()+t.slice(1)}function M(t,e,n){if(n!=="auto")return n;let a=y(t,e);if(Math.abs(a)<=7)return"day";let r=p(t,e);if(Math.abs(r)<=4)return"week";let o=v(t,e);return Math.abs(o)<=12?"month":"year"}var T=1e3,F=6e4,w=36e5,_=864e5,S=6048e5;function x(t,e,n){let a=t.getTime()-e.getTime();switch(n){case"second":return Math.trunc(a/T);case"minute":return Math.trunc(a/F);case"hour":return Math.trunc(a/w);case"day":return y(t,e);case"week":return p(t,e);case"month":return v(t,e);case"quarter":return I(t,e);case"year":return O(t,e)}let r=n}function f(t){let e=new Date(t);return e.setHours(0,0,0,0),e}function y(t,e){let n=f(t),a=f(e),r=n.getTime()-u(n),o=a.getTime()-u(a);return Math.round((r-o)/_)}function m(t){let e=new Date(t),n=e.getDay(),a=(n<1?7:0)+n-1;return e.setDate(e.getDate()-a),e.setHours(0,0,0,0),e}function p(t,e){let n=m(t),a=m(e),r=n.getTime()-u(n),o=a.getTime()-u(a);return Math.round((r-o)/S)}function v(t,e){let n=t.getFullYear()-e.getFullYear(),a=t.getMonth()-e.getMonth();return n*12+a}function D(t){let e=t.getMonth();return Math.trunc(e/3)}function I(t,e){let n=t.getFullYear()-e.getFullYear(),a=D(t)-D(e);return n*4+a}function O(t,e){return t.getFullYear()-e.getFullYear()}function u(t){let e=t.getFullYear(),n=new Date(Date.UTC(e,t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return t.getTime()-n.setUTCFullYear(e)}window.__framer_formatRelativeDate=g;
}()</script>
    <div id="main"></div>
    <script >!function(){var l="framer_variant";function u(a,r){let n=r.indexOf("#"),t=n===-1?r:r.substring(0,n),i=n===-1?"":r.substring(n),e=t.indexOf("?"),m=e===-1?t:t.substring(0,e),h=e===-1?"":t.substring(e),s=new URLSearchParams(h),d=new URLSearchParams(a);for(let[o,g]of d)s.has(o)||o!==l&&s.append(o,g);let c=s.toString();return c===""?t+i:m+"?"+c+i}var w='div#main a[href^="#"],div#main a[href^="/"],div#main a[href^="."]',f="div#main a[data-framer-preserve-params]",p=document.currentScript?.hasAttribute("data-preserve-internal-params");if(window.location.search&&!/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(navigator.userAgent)){let a=document.querySelectorAll(p?`${w},${f}`:f);for(let r of a){let n=u(window.location.search,r.href);r.setAttribute("href",n)}}
}()</script>
    
    <div id="__framer-badge-container"><!--$--><!--$--><!--$--><a class="framer-6jWyo framer-n0ccwk framer-v-n0ccwk framer-bmpgw8 __framer-badge" data-framer-appear-id="n0ccwk" data-framer-name="Light" data-nosnippet="true" style="will-change:transform;pointer-events:auto;opacity:0.001;transform:translateY(10px)" href="https://www.framer.com" rel="noopener" title="Create a free website with Framer, the website builder loved by startups, designers and agencies."><div class="framer-13yxzio" data-framer-name="Backdrop" style="background-color:rgb(255, 255, 255);border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-top-left-radius:10px;border-top-right-radius:10px;box-shadow:0px 0.6021873017743928px 1.5656869846134214px -1.5px rgba(0, 0, 0, 0.17), 0px 2.288533303243457px 5.950186588432988px -3px rgba(0, 0, 0, 0.14), 0px 10px 26px -4.5px rgba(0, 0, 0, 0.02)"></div><div class="framer-19yaanm" data-framer-name="Content" style="transform:translate(-50%, -50%)"><div class="framer-1kflzx5"><div data-framer-name="Logo" class="framer-hcsc7 framer-e50co" style="--1bd4d3i:rgb(0, 0, 0);--otdjsv:rgb(0, 0, 0);transform:translateX(-50%)"></div></div><!--$--><p style="position:absolute;transform:scale(0.001)">Create a free website with Framer, the website builder loved by startups, designers and agencies.</p><div data-framer-name="Text" class="framer-g7oZR framer-1um7t9d" style="--1bd4d3i:rgb(0, 0, 0);--otdjsv:rgb(0, 0, 0)"></div><!--/$--></div><div class="framer-j4ugry" data-framer-name="Bottom" style="mask:linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add;-webkit-mask:linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add;border-bottom-left-radius:11px;border-bottom-right-radius:11px;border-top-left-radius:11px;border-top-right-radius:11px;box-shadow:inset 0px 0px 0px 1px rgb(0, 0, 0);opacity:0.06"></div><div class="framer-jnuwbw" data-framer-name="Border" style="border-bottom-left-radius:11px;border-bottom-right-radius:11px;border-top-left-radius:11px;border-top-right-radius:11px;box-shadow:inset 0px 0px 0px 1px rgb(0, 0, 0);opacity:0.04"></div></a><!--/$--><!--/$--><!--/$--></div>
    <script data-framer-appear-animation="no-preference"></script>
    <script>typeof document<"u"&&(window.process={...window.process,env:{...window.process?.env,NODE_ENV:"production"}});</script>
    <script type="module" async data-framer-bundle="main">
        import * as Framer from "framer";
import * as React from "react";
import { createPortal } from "react-dom";
import * as ReactDOM from "react-dom/client";

        const routes = {dfxngF2Yb: {elements: {}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/dMD2JyDakNjcF9BLtAoh/SRKxzrjskpCcYoMrEIIP/dfxngF2Yb.js")), path: "/"}, e6mQKpGBW: {elements: {}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/jtezbHEUZWiTIqDXMcs5/f1Bkf9kwVlIZbYufelcZ/e6mQKpGBW.js")), path: "/about"}, uJRJ0stuM: {elements: {}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/zK3CWWywZnIKSitVCL0o/1mh1vqLhEjUneDcWoyEL/uJRJ0stuM.js")), path: "/project"}, rwTs00lRW: {elements: {}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/yz8VyZLgPcmJ6ZUXA0Lh/7dpxCT1LXvqBB61i5Jyc/rwTs00lRW.js")), path: "/product"}, C2p4XGnq8: {elements: {}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/q8L8LsMUAYVMjovHjh6z/WL0DvAwCNrxg5p1ouTTf/C2p4XGnq8.js")), path: "/stack"}, odrwKYNPV: {elements: {}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/9HWoxpcnpVWcBeXitWmk/G1ki0qrO6q17L0txWsSj/odrwKYNPV.js")), path: "/blog"}, Ny71kHUA_: {elements: {}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/dNFOljx6lmqrsuDIbLdA/JpTsJfJwlng0rt1X4Kr9/Ny71kHUA_.js")), path: "/contact"}, eQHXJCr2p: {elements: {}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/3Rpq3zCqHEW3Qo25qNUq/t9AEiwAgENPQwK6hMPoh/eQHXJCr2p.js")), path: "/404"}, qETGKpU98: {collectionId: "ndtk0G5Zk", elements: {}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/hwthx04MtruF8FElhKst/XDClsbZJtzEyzc2Hq9tC/qETGKpU98.js")), path: "/project/:KoD6nyJLU"}, JueDHy6LK: {collectionId: "wORPykON0", elements: {}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/it9UzwjUafc4MzlHOQDf/FCRJxUN80ZTpT5fePHlJ/JueDHy6LK.js")), path: "/product/:wl2y3HyWP"}, ojyMdeaZW: {collectionId: "usM6z49fk", elements: {}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/mZcf0VqTF9E4pChgIJkW/LhoQQFPTMzuXjFtGHy5M/ojyMdeaZW.js")), path: "/blog/:a6uCvVI2l"}, Tv4QXyWjw: {collectionId: "KWPByELyQ", elements: {}, page: Framer.lazy(() => import("https://framerusercontent.com/modules/e1il05Cm2A0ZEq5GfvoA/SIL3XtYdjNLPflrRMJuX/Tv4QXyWjw.js")), path: "/stack/:ZEy1PdVuj"}}

        const locales = [{code: "en", id: "default", name: "English", slug: "", textDirection: "ltr"}]
        const collectionUtils = {KWPByELyQ: async () => (await import("https://framerusercontent.com/modules/2fjHjKdVWaz6jgCRM70A/9Ej59O6OAc0htHB5JnEn/KWPByELyQ.js"))?.["utils"], ndtk0G5Zk: async () => (await import("https://framerusercontent.com/modules/67RJKo8m4BlIAek3Zm9s/wuQCaZkjqV07N73xpYJJ/ndtk0G5Zk.js"))?.["utils"], usM6z49fk: async () => (await import("https://framerusercontent.com/modules/nh9cCcdgSfDBw2ZW48Pp/xP3vnE6Og8q1VTSmeZ6Z/usM6z49fk.js"))?.["utils"], wORPykON0: async () => (await import("https://framerusercontent.com/modules/1yxRUCqZe3akUbBJGvVO/X1QRsqIk5VwtcByng626/wORPykON0.js"))?.["utils"]}
        const framerSiteId = "2d4b80dda15d89e7584db3d6526356d5184087faf31e8eef415bf56424bc234f"
        

        export async function getPageRoot({ routeId, pathVariables, localeId }) {
            const rootPreload = routes[routeId].page.preload()

            const content = React.createElement(
                Framer.PageRoot,
                {
                    isWebsite: true,
                    routeId,
                    pathVariables,
                    routes,
                    collectionUtils,
                    framerSiteId,
                    notFoundPage: Framer.lazy(() => import("https://framerusercontent.com/modules/3Rpq3zCqHEW3Qo25qNUq/t9AEiwAgENPQwK6hMPoh/eQHXJCr2p.js")),
                    isReducedMotion: undefined,
                    localeId,
                    locales,
                    preserveQueryParams: undefined,
                    siteCanonicalURL: undefined,
                    EditorBar: 
            typeof window !== "undefined" ? (() => {
                const isBot = /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(navigator.userAgent)
                if (isBot) {
                    console.log("[Framer On-Page Editing] Unavailable because navigator is bot")
                    return
                }

                return Framer.lazy(async () => {
                    const dependencies = {
                        __version: 2,
                        framer: {
                            useCurrentRoute: Framer.useCurrentRoute,
                            useLocaleInfo: Framer.useLocaleInfo,
                            useRouter: Framer.useRouter,
                        },
                        react: {
                            createElement: React.createElement,
                            Fragment: React.Fragment,
                            memo: React.memo,
                            useCallback: React.useCallback,
                            useEffect: React.useEffect,
                            useRef: React.useRef,
                            useState: React.useState,
                        },
                        "react-dom": { createPortal },
                    }

                    window.__framer_editorBarDependencies = dependencies

                    const { createEditorBar } = await import("https://framer.com/edit/init.mjs")
                    return {
                        default: createEditorBar(),
                    }
                })
            })() : undefined
        ,
                    adaptLayoutToTextDirection: false,
                    
                }
            )

            const contentWithFeaturesContext = React.createElement(
                Framer.LibraryFeaturesProvider,
                {
                    children: content,
                    value: {advancedSpamProtection: true, customCodeSiteSettings: false, editorBarDisableFrameAncestorsSecurity: false, motionDivToDiv: false, onPageLocalizationSupport: false, onPageMoveTool: false, synchronousNavigationOnDesktop: false, yieldOnTap: false}
                }
            )

            const contentWithGracefullyDegradingErrorBoundary = React.createElement(Framer.GracefullyDegradingErrorBoundary, {
                children: contentWithFeaturesContext
            })

            
            const page = React.createElement(Framer.PageEffectsProvider, {
                children: contentWithGracefullyDegradingErrorBoundary,
                value: {routes: {}}
            })

            // We don't want the initial render to immediately have to suspend.
            await rootPreload
            return page
        }

        const isBrowser = typeof document !== "undefined"
        if (isBrowser) {
            window.__framer_importFromPackage = (packageAndFilename, exportIdentifier) => () => {
                return React.createElement(Framer.ErrorPlaceholder, { error: 'Package component not supported: "' + exportIdentifier + '" in "' + packageAndFilename + '"' })
            }

            window.__framer_events = window.__framer_events || []

            // Fallback support for stack gaps
            Framer.installFlexboxGapWorkaroundIfNeeded()

            const container = document.getElementById("main")
            // We know that #main is parsed before this script, so we don't need to wait for DOMContentLoaded or similar events.
            if ("framerHydrateV2" in container.dataset) main(true, container)
            else main(false, container)
        }

        function track() {
            if (!isBrowser) return
            window.__framer_events.push(arguments)
        }

        async function main(shouldHydrate, container) {
            function handleError(error, errorInfo, recoverable = true) {
                if (error.caught || window.__framer_hadFatalError) return // we already logged it

                const componentStack = errorInfo?.componentStack
                if (recoverable) {
                    console.warn("Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:\n", error, componentStack)
                    // we only want to collect 1%, because this can be quite noisy (floods the data pipeline)
                    if (Math.random() > 0.01) return
                } else {
                    console.error("Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:\n", error, componentStack)
                }
                track(recoverable ? "published_site_load_recoverable_error" : "published_site_load_error", {
                    message: String(error),
                    componentStack, // componentStack is more useful
                    stack: componentStack ? undefined : error instanceof Error && typeof error.stack === "string" ? error.stack : null,
                })
            }

            try {
                let routeId, localeId, pathVariables, breakpoints
                if (shouldHydrate) {
                    const routeData = JSON.parse(container.dataset["framerHydrateV2"])
                    routeId = routeData.routeId
                    localeId = routeData.localeId
                    pathVariables = routeData.pathVariables
                    breakpoints = routeData.breakpoints

                    routeId = Framer.patchRoutesForABTesting(routes, routeId) // Prioritize optimized route id to avoid flickering in browsers not supporting the server-timing header (Safari older than 16.4)
                } else {
                    Framer.patchRoutesForABTesting(routes, undefined) // This must happen before inferInitialRouteFromPath

                    
                    const routeData = Framer.inferInitialRouteFromPath(routes, decodeURIComponent(location.pathname), true, locales)
                    routeId = routeData.routeId
                    localeId = routeData.localeId
                    pathVariables = routeData.pathVariables
                    
                }

                const pagePromise = getPageRoot({ routeId, localeId, pathVariables })

                
if (typeof window !== "undefined") {
    void (async () => {
        const route = routes[routeId]

        const defaultLocaleId = "default"
        const framerLocale = locales.find(({ id }) => !localeId ? id === defaultLocaleId : id === localeId).code

        let collectionItemId = null
        if (route?.collectionId && collectionUtils) {
              const utils = await collectionUtils[route.collectionId]?.()
              const [slug] = Object.values(pathVariables)
              if (utils && typeof slug === "string") {
                  collectionItemId = (await utils.getRecordIdBySlug(slug, framerLocale || undefined)) ?? null
              }
        }

        const resolvedDateTimeOptions = Intl.DateTimeFormat().resolvedOptions()
        const timezone = resolvedDateTimeOptions.timeZone
        const locale = resolvedDateTimeOptions.locale

        // wait for the page to be activated before sending the pageview event
        // https://developer.chrome.com/docs/web-platform/prerender-pages#impact-on-analytics
        await new Promise((resolve) => {
            if (document.prerendering) {
                document.addEventListener("prerenderingchange", resolve, { once: true })
            } else {
                resolve()
            }
        })

        window.__framer_events.push([
            "published_site_pageview",
            {
                framerSiteId: framerSiteId ?? null,
                version: 2,
                routePath: route?.path || "/",
                collectionItemId,
                framerLocale: framerLocale || null,
                webPageId: route?.abTestingVariantId ?? routeId,
                abTestId: route?.abTestId,
                referrer: document.referrer || null,
                url: window.location.href,
                hostname: window.location.hostname || null,
                pathname: window.location.pathname || null,
                hash: window.location.hash || null,
                search: window.location.search || null,
                timezone,
                locale,
            },
            "eager"
        ])

        // Yield to avoid blocking the main thread with the user code
        await Framer.yieldToMain({ priority: "background", ensureContinueBeforeUnload: true, continueAfter: "paint" })

        document.dispatchEvent(new CustomEvent("framer:pageview", {
            detail: { framerLocale: framerLocale || null }
        }))
    })()
}


                const page = await pagePromise
                if (shouldHydrate) {
                    

                    Framer.withPerformanceMarks("framer-rewrite-breakpoints", () => {
                        Framer.removeHiddenBreakpointLayersV2(breakpoints)
                        window.__framer_onRewriteBreakpoints?.(breakpoints)
                    })

                    

                    const startTransition = React.startTransition
                    startTransition(() => {
                        Framer.markHydrationStart()
                        if (true) Framer.turnOffReactEventHandling()
                        ReactDOM.hydrateRoot(container, page, { onRecoverableError: handleError })
                    })
                } else {
                    
                    ReactDOM.createRoot(container, { onRecoverableError: handleError }).render(page)
                }
            } catch (error) {
                handleError(error, undefined, false)
                throw error
            }
        }

        

        
        ;(function () {
            if (!isBrowser) return

            React.startTransition(() => {
                ReactDOM.hydrateRoot(
                    document.getElementById("__framer-badge-container"),
                    React.createElement(React.Suspense, {}, React.createElement(React.lazy(() => import("__framer-badge"))))
                )
            })
        })()
    </script>
    <!-- Start of bodyEnd -->
    
    <!-- End of bodyEnd -->
</body>
</html>
```