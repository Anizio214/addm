#!/bin/bash
# Patch ViewController.swift para Basic Auth no WKWebView (Capacitor 6)

VIEWCONTROLLER="ios/App/App/ViewController.swift"

cat > "$VIEWCONTROLLER" << 'EOF'
import UIKit
import Capacitor
import WebKit

class ViewController: CAPBridgeViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func webView(_ webView: WKWebView, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Void) {
        if challenge.protectionSpace.authenticationMethod == NSURLAuthenticationMethodHTTPBasic {
            let credential = URLCredential(
                user: "admin",
                password: "Ricoy123",
                persistence: .forSession
            )
            completionHandler(.useCredential, credential)
        } else {
            completionHandler(.performDefaultHandling, nil)
        }
    }
}
EOF

echo "ViewController.swift atualizado com Basic Auth"
