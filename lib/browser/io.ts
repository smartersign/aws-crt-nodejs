/* Copyright 2010-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License").
* You may not use this file except in compliance with the License.
* A copy of the License is located at
*
*  http://aws.amazon.com/apache2.0
*
* or in the "license" file accompanying this file. This file is distributed
* on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
* express or implied. See the License for the specific language governing
* permissions and limitations under the License.
*/

export { TlsVersion } from "../common/io";
import { InputStreamBase } from "../common/io";

export function is_alpn_available(): boolean {
    return false;
}

type BodyData = string | object | ArrayBuffer | ArrayBufferView | Blob | File;

export class InputStream implements InputStreamBase {
    constructor(public data: BodyData) {
        
    }
}
